const aliases = require('./.aliases');
const aliasHelper = require('./webpack/helpers/aliases');

module.exports = {
  extends: '@tsconfig/svelte/tsconfig.json',
  include: ['assets/**/*', '.eslintrc.js'],
  exclude: ['node_modules', 'babel.config.js'],
  compilerOptions: {
    allowJs: true,
    target: 'es6',
    module: 'esnext',
    resolveJsonModule: true,
    esModuleInterop: true,
    paths: aliasHelper.formatTypescriptAliases(aliases),
    verbatimModuleSyntax: false,
    ignoreDeprecations: '5.0',
  },
  "ts-node": {
    "compilerOptions": {
      "module": "commonjs",
      "target": "es6",
      "esModuleInterop": true,
      "strict": false,
    }
  }
};
