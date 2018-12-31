/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

const DEFAULT_HOST = 'localhost'
const DEFAULT_PORT = 3000;

module.exports = merge.smart(common, {
  // specify the root module for our application aka entry point
  entry: {
    bundle: ['babel-polyfill', 'react-hot-loader/patch', './src/index.js'],
  },
  // what type of source maps to use, for more options see: https://webpack.js.org/configuration/devtool/
  // cheap-eval-source-map is relatively fast, includes source code, but no column numbers
  devtool: 'cheap-eval-source-map',

  // webpack dev-server configuration
  devServer: {
    compress: true, // use compression
    host: process.env.HOST || DEFAULT_HOST,
    port: process.env.PORT || DEFAULT_PORT, // what port on localhost content will be served from
    hot: true, // for hot-module-replacement,
    historyApiFallback: true,
    stats: {
      // build stats to display while webpack is running: https://webpack.js.org/configuration/stats/
      assets: false,
      colors: true,
      children: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      errors: true,
      errorDetails: false,
      hash: false,
      modules: false,
      moduleTrace: false,
      performance: false,
      reasons: false,
      source: false,
      timings: true,
      version: false,
      warnings: true,
    },
  },

  plugins: [
    // enable hot-module-replacement
    new webpack.HotModuleReplacementPlugin(),

    // show relative paths when HMR is enabled
    new webpack.NamedModulesPlugin(),
  ],
});
