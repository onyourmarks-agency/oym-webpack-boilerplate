import path from 'path';
import FriendlyErrorsWebpackPlugin from '@nuxt/friendly-errors-webpack-plugin';
import {WebpackManifestPlugin} from 'webpack-manifest-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import {Configuration} from 'webpack';
import {WebpackApplicationConfiguration} from '../_declaration/config-types';

export default function (webpack: Configuration, config: WebpackApplicationConfiguration) {
  console.warn = (...data: any[]) => {
    if (data[0] && data[0].indexOf('You should add "svelte" to the "resolve.conditionNames"') !== -1) {
      return;
    }

    console.log(...data);
  }

  webpack.plugins.push(new WebpackNotifierPlugin({
    alwaysNotify: true,
    skipFirstNotification: true,
    contentImage: path.join(__dirname, '../config/external/webpack.notifierlogo.png'),
  }));
  webpack.plugins.push(new WebpackManifestPlugin({}));
  webpack.plugins.push(new FriendlyErrorsWebpackPlugin());
};
