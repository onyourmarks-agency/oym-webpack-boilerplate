module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['compat'],
  rules: {
    'compat/compat': 2,
    'import/prefer-default-export': 'off',
    'import/first': 'off',
    'import/no-mutable-exports': 'off',
    'linebreak-style': 0,
    'no-continue': 0,
    'max-len': [
      'error',
      {
        code: 150,
        tabWidth: 2,
        comments: 200,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-new': 0,
    'prefer-promise-reject-errors': 0,
  },
};
