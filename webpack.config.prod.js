/* eslint-disable */
// This is the "production" configuration for Webpack, for development use webpack.config.dev.js
// Main differences from dev config:
// - no dev server
// - uglify & minify js bundles
// - minify css
// - use different type of source maps for production
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const common = require('./webpack.config.common.js');

module.exports = merge.smart(common, {
  entry: {
    bundle: ['babel-polyfill', './src/index.js'],
  },

  // what type of source maps to use, for more options see: https://webpack.js.org/configuration/devtool/
  devtool: 'nosources-source-map',

  // what to output to the console, for more see: https://webpack.js.org/configuration/stats/
  stats: 'minimal',

  plugins: [
    new CopyWebpackPlugin([
      {from: "./src/index.html", to: path.join(__dirname, "dist/index.html")}
    ]),

    // NOTE: this uses UglifyJS v3 (uglify-es)
    new UglifyJSPlugin({
      test: /\.(js|jsx)$/,
      cache: true,
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        ie8: false,
        ecma: 8,
        compress: {
          dead_code: true,
          warnings: false, // Suppress uglification warnings
        },
        mangle: true,
      },
      exclude: [/\.min\.js$/gi], // skip pre-minified libs && css
    }),
  ],
});