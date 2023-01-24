// eslint-disable

const aliases = require('./.aliases');
const aliasHelper = require('./webpack/helpers/aliases');

System.config({
  paths: aliasHelper.formatPhpstormAliases(aliases),
});
