/* eslint-disable import/no-extraneous-dependencies,no-new */
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('@nuxt/friendly-errors-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

// eslint-disable-next-line no-unused-vars
module.exports = function (webpack, config) {
  webpack.plugins.push(new WebpackNotifierPlugin({
    alwaysNotify: true,
    skipFirstNotification: true,
    contentImage: path.join(__dirname, '../config/external/webpack.notifierlogo.png'),
  }));
  webpack.plugins.push(new WebpackManifestPlugin());
  webpack.plugins.push(new FriendlyErrorsWebpackPlugin());
};
