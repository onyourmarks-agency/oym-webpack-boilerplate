/* eslint-disable import/no-extraneous-dependencies */
const _ = require('lodash');
const GLOBAL_CONFIG = require('./default');

const PROD_CONFIG = {
  /**
   * Debug mode (true|false). Should be disabled on production builds
   */
  debug: false,

  /**
   * Source map variant
   */
  sourceMap: false, // Recommended option when enabled: 'source-map',
};

module.exports = _.merge({}, GLOBAL_CONFIG, PROD_CONFIG);
