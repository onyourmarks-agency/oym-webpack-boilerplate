module.exports = {
  bracketSameLine: true,
  cssDeclarationSorterOrder: process.env.ORDER ? process.env.ORDER : 'smacss',
  htmlWhitespaceSensitivity: 'ignore',
  plugins: ['prettier-plugin-css-order', 'prettier-plugin-svelte'],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  overrides: [
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
      },
    },
  ],
};
