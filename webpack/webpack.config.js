/* eslint-disable import/no-dynamic-require,global-require */
const _ = require('lodash');

const buildType = process.env.NODE_ENV || 'default';
const config = require(`./config/${buildType.length ? `${buildType}` : ``}`);
const fs = require('fs');
const path = require('path');

if (!fs.existsSync(config.private)) {
  fs.mkdirSync(config.private);
}


const webpack = {
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
        svelte: path.dirname(require.resolve('svelte/package.json'))
      },
      ...config.aliases
    },
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

_.forEach(config.enabledPlugins, (plugin) => {
  require(`./plugins/${plugin}-plugin`)(webpack, config);
});

module.exports = webpack;
