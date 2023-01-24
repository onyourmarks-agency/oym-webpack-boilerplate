/* eslint-disable import/no-extraneous-dependencies */
const _ = require('lodash');
const GLOBAL_CONFIG = require('./default');

const DEVELOPMENT_CONFIG = {
  /**
   * Debug mode (true|false). Should be disabled on production builds
   */
  debug: true,
};

module.exports = _.merge({}, GLOBAL_CONFIG, DEVELOPMENT_CONFIG);
