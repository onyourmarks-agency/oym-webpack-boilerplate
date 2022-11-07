/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = function (webpack, config) {
  webpack.module.rules.push({
    test: /(\.scss?$)|(\.css)/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: config.debug,
          url: false,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: config.debug,
          postcssOptions: {
            plugins: [
              [
                'autoprefixer',
              ],
            ],
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: config.debug,
        },
      },
    ],
  });

  webpack.plugins.push(
    new MiniCssExtractPlugin({
      filename: config.components.css.fileMask,
    })
  );

  webpack.optimization.minimizer.push(new CssMinimizerPlugin({
    parallel: 4,
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
