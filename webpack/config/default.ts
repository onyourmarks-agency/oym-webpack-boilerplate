import path from 'path';

import aliasHelper from './../helpers/aliases';
import aliases from './../../.aliases';
import {WebpackApplicationConfiguration} from '../_declaration/config-types';

const BASE_PATH: string = path.resolve(__dirname, '../..');

const PUBLIC_FOLDER: string = 'public';

const DEFAULT_CONFIG: WebpackApplicationConfiguration = {
  /**
   * Debug mode (true|false). Should be disabled on production builds
   */
  debug: true,

  /**
   * Public folder prefix. This is usually the private path prefixed with /web or /public
   */
  public: `/build/`,

  /**
   * Private build folder
   */
  private: `${BASE_PATH}/${PUBLIC_FOLDER}/build/`,

  /**
   * Manifest file name
   */
  manifestFile: 'manifest.json',

  /**
   * Source map variant
   */
  sourceMap: 'eval-cheap-module-source-map',

  /**
   * The base entry files that have to go through the loader
   */
  entries: {
    'js-app': `${BASE_PATH}/assets/js/app.ts`,
    'js-outdated-browser': `${BASE_PATH}/assets/js/outdated.ts`,
    'css-main': `${BASE_PATH}/assets/css/styles.scss`,
  },

  /**
   * Registered and enabled plugins, executed IN order
   */
  enabledPlugins: [
    'cleaner',
    'css',
    'js',
    'svg',
    'misc',
  ],

  /**
   * Get aliases from variable imported above
   */
  aliases: aliasHelper.formatWebpackAliases(aliases),

  /**
   * Components
   */
  components: {
    /**
     * Cleaner: Clean build folder prior to a new build
     */
    cleaner: {
      pattern: ['**/*', '!svg*', '!manifest.json'],
      watchPattern: ['!svg*', '!manifest.json'],
    },

    /**
     * Javascript (ES6)
     */
    js: {
      source: `${BASE_PATH}/assets/js/`,
      dist: `${BASE_PATH}/${PUBLIC_FOLDER}/build/js/`,
      fileMask: 'js/[name].build.js?v=[contenthash:6]',
    },

    /**
     * CSS with SCSS
     */
    css: {
      source: `${BASE_PATH}/assets/css/`,
      dist: `${BASE_PATH}/${PUBLIC_FOLDER}/build/css/`,
      fileMask: 'css/[name].build.css?h=[contenthash:6]',
    },

    /**
     * SVG sprites
     */
    svg: {
      source: `${BASE_PATH}/assets/svg/`,
      dist: `${BASE_PATH}/${PUBLIC_FOLDER}/build/svg/`,
    },
  },
};

export default DEFAULT_CONFIG;
