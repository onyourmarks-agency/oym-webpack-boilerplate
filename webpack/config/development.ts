import _ from 'lodash';
import GLOBAL_CONFIG from './default';
import {WebpackApplicationConfiguration} from '../_declaration/config-types';

const DEVELOPMENT_CONFIG: Partial<WebpackApplicationConfiguration> = {
  /**
   * Debug mode (true|false). Should be disabled on production builds
   */
  debug: true,
};

export default _.merge({}, GLOBAL_CONFIG, DEVELOPMENT_CONFIG);
