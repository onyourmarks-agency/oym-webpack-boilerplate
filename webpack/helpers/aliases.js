const path = require('path');

const BASE_PATH = path.resolve(__dirname, '../..');

const formatEslintAliases = (aliases) => Object.entries(aliases).map(
  (alias) => [
    alias[0],
    `./${alias[1]}`,
  ]);

const formatPhpstormAliases = (aliases) => {
  const mappedAliases = {};

  Object.entries(aliases).forEach((value) => {
    mappedAliases[`${value[0]}`] = `./${value[1]}`;
    mappedAliases[`${value[0]}/*`] = `./${value[1]}/*`;
  });

  return mappedAliases;
};

const formatTypescriptAliases = (aliases) => {
  const mappedAliases = {};

  Object.entries(aliases).forEach((value) => {
    mappedAliases[`${value[0]}/*`] = [
      `./${value[1]}/*`
    ];
  });

  return mappedAliases;
};

const formatWebpackAliases = (aliases) => {
  const mappedAliases = {};

  Object.entries(aliases).forEach((value) => {
    mappedAliases[value[0]] = path.resolve(__dirname, `${BASE_PATH}/${value[1]}/`);
  });
;
  return mappedAliases;
};

module.exports = {
  formatEslintAliases,
  formatPhpstormAliases,
  formatTypescriptAliases,
  formatWebpackAliases,
}
