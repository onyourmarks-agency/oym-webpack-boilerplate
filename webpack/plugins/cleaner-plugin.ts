import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import ExtraneousFileCleanupPlugin from 'webpack-extraneous-file-cleanup-plugin';
import {Configuration} from 'webpack';
import {WebpackApplicationConfiguration} from '../_declaration/config-types';

export default function (webpack: Configuration, config: WebpackApplicationConfiguration) {
  webpack.plugins.push(new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: config.components.cleaner.pattern,
    cleanAfterEveryBuildPatterns: config.components.cleaner.watchPattern,
    verbose: true,
  }));

  webpack.plugins.push(new ExtraneousFileCleanupPlugin({
    extensions: ['.js'],
    minBytes: 20,
    manifestJsonName: config.manifestFile,
  }));
};
