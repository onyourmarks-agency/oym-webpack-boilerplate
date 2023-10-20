module.exports = {
  bracketSameLine: true,
  cssDeclarationSorterOrder: process.env.ORDER ? process.env.ORDER : 'smacss',
  htmlWhitespaceSensitivity: 'ignore',
  plugins: ['prettier-plugin-css-order'],
  printWidth: 100,
  semi: true,
  singleQuote: true,
};
