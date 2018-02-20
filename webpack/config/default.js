const path = require('path');
const BASE_PATH = path.resolve(__dirname, '../..');

const DEFAULT_CONFIG = {
    /**
     * Debug mode (true|false). Should be disabled on production builds
     */
    debug: true,
    
    /**
     * Public folder prefix. This is usually the private path prefixed with /web or /public
     */
    public: '/',

    /**
     * Private build folder
     */
    private: BASE_PATH + '/public/build',

    /**
     * Manifest file name
     */
    manifestFile: 'manifest.json',

    /**
     * The base entry files that have to go through the loader
     */
    entries: {
        'js-app': BASE_PATH + '/assets/js/app.js',
        'css-main': BASE_PATH + '/assets/css/styles.scss',
    },

    /**
     * Registered and enabled plugins, executed IN order
     */
    enabledPlugins: [
        'misc',
        'cleaner',
        'css',
        'js',
        'mjml',
        'svg'
    ],

    /**
     * Components
     */
    components: {
        /**
         * Cleaner: Clean build folder prior to a new build
         */
        cleaner: {
            excludes: ['svg', 'manifest.json'],
        },

        /**
         * MJML: Email framework
         */
        mjml: {
            extension: '.twig',
            source: BASE_PATH + '/assets/mjml/',
            dist: BASE_PATH + '/public/build/mjml/'
        },

        /**
         * Javascript (ES6)
         */
        js: {
            source: BASE_PATH + '/assets/js/',
            dist: BASE_PATH + '/public/build/js/',
            fileMask: 'js/[name].build.js?v=[hash:6]'
        },

        /**
         * CSS with SSS
         */
        css: {
            source: BASE_PATH + '/assets/css/',
            dist: BASE_PATH + '/public/build/css/',
            fileMask: 'css/[name].build.css?h=[hash:6]'
        },

        /**
         * SVG sprites
         */
        svg: {
            source: BASE_PATH + '/assets/svg/',
            dist: BASE_PATH + '/public/build/svg/'
        }
    }
};

module.exports = DEFAULT_CONFIG;
