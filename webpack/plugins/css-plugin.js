/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = function (webpack, config) {
  webpack.module.rules.push({
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: config.debug,
        },
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: config.debug,
          config: {
            path: path.resolve(__dirname, '../config/external/postcss.config.js'),
          },
        },
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: config.debug,
        },
      },
    ],
  });

  webpack.plugins.push(new MiniCssExtractPlugin({
    filename: config.components.css.fileMask,
  }));

  webpack.optimization.minimizer.push(new CssMinimizerPlugin({
    minimizerOptions: {
      preset: [
        'default',
        {
          discardComments: { removeAll: true },
        },
      ],
    },
  }))
};
