/* global Bouncer */

import loadValidation from './load-validation';
import { bouncerDefaultConfig } from './config';
// import formatDateField from './format-date-field';

const formClassSelector = '.js-form-validate';

const initDefault = () => {
  if (!document.querySelector(formClassSelector)) {
    return;
  }

  // Init the validation after loading bouncer
  loadValidation().then(() => {
    new Bouncer(formClassSelector, bouncerDefaultConfig);
  });

  // Format date field
  // formatDateField();
};

export default initDefault;
