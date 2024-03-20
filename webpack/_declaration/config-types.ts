import {EntryObject} from 'webpack';

export type WebpackApplicationConfiguration = {
  /**
   * Debug mode (true|false). Should be disabled on production builds
   */
  debug: boolean;

  /**
   * Public folder prefix. This is usually the private path prefixed with /web or /public
   */
  public: string,
  /**
   * Private build folder
   */
  private: string,

  /**
   * Manifest file name
   */
  manifestFile: string | 'manifest.json',

  /**
   * Source map variant
   */
  sourceMap:
    false
    | 'eval'
    | 'eval-cheap-source-map'
    | 'eval-cheap-module-source-map'
    | 'eval-source-map'
    | 'cheap-source-map'
    | 'cheap-module-source-map'
    | 'source-map'
    | 'inline-cheap-source-map'
    | 'inline-cheap-module-source-map'
    | 'inline-source-map'
    | 'eval-nosources-cheap-source-map'
    | 'eval-nosources-cheap-module-source-map'
    | 'eval-nosources-source-map'
    | 'inline-nosources-cheap-source-map'
    | 'inline-nosources-cheap-module-source-map'
    | 'inline-nosources-source-map'
    | 'nosources-cheap-source-map'
    | 'nosources-cheap-module-source-map'
    | 'nosources-source-map'
    | 'hidden-nosources-cheap-source-map'
    | 'hidden-nosources-cheap-module-source-map'
    | 'hidden-nosources-source-map'
    | 'hidden-cheap-source-map'
    | 'hidden-cheap-module-source-map'
    | 'hidden-source-map',

  entries: EntryObject,

  /**
   * Get aliases from variable imported above
   */
  enabledPlugins: ('cleaner' | 'css' | 'js' | 'svg' | 'misc')[],

  /**
   * Get aliases from variable imported above
   */
  aliases: Record<string, string> | {},

  /**
   * Components
   */
  components: {
    /**
     * Cleaner: Clean build folder prior to a new build
     */
    cleaner: {
      pattern: string[],
      watchPattern: string[],
    },

    /**
     * Javascript (ES6)
     */
    js: {
      source: string,
      dist: string,
      fileMask: string,
    },

    /**
     * CSS with SCSS
     */
    css: {
      source: string
      dist: string,
      fileMask: string,
    },

    /**
     * SVG sprites
     */
    svg: {
      source: string,
      dist: string,
    },
  }
};
