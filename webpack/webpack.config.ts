import fs from 'node:fs';
import path from 'path';
import {Configuration} from 'webpack';
import {WebpackApplicationConfiguration} from './_declaration/config-types';

const buildType = process.env.NODE_ENV || 'default';
const config = (require(`./config/${buildType.length ? `${buildType}` : ``}`)).default as WebpackApplicationConfiguration;

if (!fs.existsSync(config.private)) {
  fs.mkdirSync(config.private);
}

const webpack: Configuration = {
  mode: config.debug ? 'development' : 'production',
  plugins: [],
  module: {
    rules: [],
  },
  devtool: config.sourceMap,
  entry: config.entries,
  output: {
    path: config.private,
    filename: config.components.js.fileMask,
    publicPath: config.public,
  },
  resolve: {
    alias: {
      ...{
        svelte: path.resolve('node_modules', 'svelte/src/runtime'),
      },
      ...config.aliases
    },
    conditionNames: ['svelte', 'node', 'require'],
    extensions: ['.js', '.ts', '.svelte', '.mjs'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  optimization: {
    minimize: !config.debug,
    minimizer: [],
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true,
        },
      },
    },
  },
  target: ['web', 'es5'],
  performance: {
    hints: buildType === 'production' ? 'warning' : false,
  },
};

config.enabledPlugins.forEach((plugin) => {
  require(`./plugins/${plugin}-plugin`).default(webpack, config);
});

export default webpack;
