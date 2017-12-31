/* eslint-disable */
// webpack configuration common to both production and development
const metadata = require("./package.json")
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: '[name].[hash].css',
  disable: process.env.NODE_ENV === 'development',
});

console.log(process.env.NODE_ENV);

module.exports = {
  // where the compiled code is placed
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.geojson'],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  // what to do with different types of modules, e.g. sass, js, jsx, json, geojson
  module: {
    rules: [
      // Lint JS and transpile ES6 to ES5
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              failOnError: false, // temporary
            }
          },
        ],
      },
      // Use Sass and transpile to CSS
      {
        test: /\.(css|scss)$/,
        use: process.env.NODE_ENV !== 'production'
          ? [
              {
                loader: 'style-loader', // creates style nodes from JS strings
              },
              {
                loader: 'css-loader', // translates CSS into CommonJS
              },
              {
                loader: 'postcss-loader', // postcss loader so we can use autoprefixer
                options: {
                  config: {
                    path: 'postcss.config.js',
                  },
                },
              },
              {
                loader: 'sass-loader', // compiles Sass to CSS
              },
            ]
          : extractSass.extract({
            use: [
              {
                loader: 'css-loader',
              },
              {
                loader: 'sass-loader',
              },
            ],
            fallback: [
              {
                loader: 'style-loader',
              },
            ],
          }),
      },
      // allows for using ES6 (dynamic) imports for JSON and GeoJSON files, no async loading!
      {
        test: /\.(json|geojson)$/,
        use: 'json-loader',
      },
      // load images
      // url-loader will base64 encode images smaller than options.limit
      // otherwise it behaves just like file-loader
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
      // load local fonts if they exist
      // for more info see https://survivejs.com/webpack/loading/fonts/
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },

  plugins: [
    // set environment variables which can be used in source code
    new webpack.DefinePlugin({
      'process.env.IMMERSE_BUILD_MODE': JSON.stringify(process.env.IMMERSE_BUILD_MODE),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.APP_VERSION': JSON.stringify(metadata.version),
    }),

    extractSass,

    // codesplitting: vendor libraries
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),

    // codesplitting: source
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),

    // allows for appending script and link tags for bundled JS and CSS
    new HTMLWebpackPlugin({
      template: 'src/index.html',
    }),

    // desktop notification when webpack updates
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ],
}
