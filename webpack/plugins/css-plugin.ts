import {Configuration} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import {WebpackApplicationConfiguration} from '../_declaration/config-types';

export default function (webpack: Configuration, config: WebpackApplicationConfiguration) {
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
  }));
};
