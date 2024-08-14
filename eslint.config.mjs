import js from '@eslint/js';
import globals from 'globals';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import compat from 'eslint-plugin-compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import svelteParser from 'svelte-eslint-parser';

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginSvelte from 'eslint-plugin-svelte';

import ALIASES from './.aliases.js';
import { formatEslintAliases } from './webpack/helpers/aliases.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const flatCompat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const ESLINT_IGNORES = [
  'api-simple/*',
  'assets/css/*',
  'assets/svg/*',
  'assets/**/*.d.ts',
  'config/*',
  'docker/*',
  'files/*',
  'migrations/*',
  'modules/*',
  'node_modules/*',
  'public/*',
  'storage/*',
  'templates/*',
  'translations/*',
  'vendor/*',
  'webpack/*',
];

const ESLINT_RULES = {
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    },
  ],
  'compat/compat': 2,
  'import/prefer-default-export': 'off',
  'import/first': 'off',
  'import/no-amd': 'off',
  'import/no-mutable-exports': 'off',
  'import/no-named-as-default': 'off',
  'import/newline-after-import': 'off',
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      ts: 'never',
      svelte: 'always',
    },
  ],
  'import/no-named-as-default-member': 'off',
  'linebreak-style': 0,
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
      ignorePattern: '.*base64,.*',
    },
  ],
  'no-continue': 0,
  'no-new': 0,
  'no-param-reassign': [
    2,
    {
      props: false,
    },
  ],
  'prefer-promise-reject-errors': 0,
  'svelte/no-target-blank': 'error',
  'svelte/no-at-debug-tags': 'error',
  'svelte/no-reactive-functions': 'error',
  'svelte/no-reactive-literals': 'error',
  'svelte/no-at-html-tags': 1,
};

const ESLINT_SETTINGS = {
  polyfills: ['fetch', 'Promise'],
  'import/resolver': {
    alias: {
      map: [...formatEslintAliases(ALIASES), ['@svelte', './assets/js/svelte']],
      extensions: ['.js', '.ts', '.svelte'],
    },
  },
};

const ESLINT_LANGUAGE_OPTIONS = {
  parser: tsParser,
  parserOptions: {
    requireConfigFile: false,
    project: './tsconfig.json',
    extraFileExtensions: ['.svelte'],
  },
};

export default [
  ...eslintPluginSvelte.configs['flat/recommended'],
  ...flatCompat.extends('airbnb-base', 'airbnb-typescript/base', 'prettier'),
  eslintPluginPrettierRecommended,
  js.configs.recommended,
  {
    ignores: ESLINT_IGNORES,
  },
  {
    plugins: {
      compat,
      '@typescript-eslint': typescriptEslint,
    },
    languageOptions: {
      ...ESLINT_LANGUAGE_OPTIONS,
      globals: {
        ...globals.browser,
        globalThis: 'readonly',
        NodeListOf: 'readonly',
      },
      ecmaVersion: 5,
      sourceType: 'script',
    },
    settings: {
      ...ESLINT_SETTINGS,
    },
    rules: {
      ...ESLINT_RULES,
    },
  },
  {
    plugins: {
      compat,
      '@typescript-eslint': typescriptEslint,
    },
    files: ['**/*.svelte'],
    languageOptions: {
      ...ESLINT_LANGUAGE_OPTIONS,
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
      },
    },
    settings: {
      ...ESLINT_SETTINGS,
    },
    rules: {
      ...ESLINT_RULES,
    },
  },
];
