import _ from 'lodash';
import GLOBAL_CONFIG from './default';
import {WebpackApplicationConfiguration} from '../_declaration/config-types';

const PROD_CONFIG: Partial<WebpackApplicationConfiguration> = {
  /**
   * Debug mode (true|false). Should be disabled on production builds
   */
  debug: false,

  /**
   * Source map variant
   */
  sourceMap: false, // Recommended option when enabled: 'source-map',
};

const test: Record<string, string> = {
  key: 'value',

}
export default _.merge({}, GLOBAL_CONFIG, PROD_CONFIG);

