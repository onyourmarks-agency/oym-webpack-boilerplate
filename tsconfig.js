const aliases = require('./.aliases');
const aliasHelper = require('./webpack/helpers/aliases');

module.exports = {
  extends: '@tsconfig/svelte/tsconfig.json',
  include: ['assets/**/*', '.eslintrc.js'],
  exclude: ['node_modules', 'babel.config.js'],
  compilerOptions: {
    target: 'es6',
    module: 'esnext',
    resolveJsonModule: true,
    paths: aliasHelper.formatTypescriptAliases(aliases),
  },
};
