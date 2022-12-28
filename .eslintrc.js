module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['compat', 'svelte3', '@typescript-eslint'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    'svelte3/typescript': () => require('typescript'),
    'svelte3/ignore-styles': () => true,
    polyfills: ['fetch', 'Promise'],
  },
  rules: {
    'compat/compat': 2,
    'import/prefer-default-export': 'off',
    'import/first': 'off',
    'import/no-mutable-exports': 'off',
    'linebreak-style': 0,
    'no-continue': 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "ts": "never",
        "svelte": "never",
      }
    ],
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
    'no-param-reassign': [2, { props: false }],
    'prefer-promise-reject-errors': 0,
  },
};
