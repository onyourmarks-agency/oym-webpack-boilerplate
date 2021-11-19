/* global Bouncer */

import loadValidation from './load-validation';
import config from './config';
import validationMessages from './validation-messages';
// import formatDateField from './format-date-field';
// import isAtLeastOneCheckboxChecked from './customvalidations/is-at-least-one-checkbox-checked';
// import date from './customvalidations/date';

const formClassSelector = '.js-form-validate';
const form = document.querySelector(formClassSelector);

/*
 * Validate the form
 */
const validate = () =>
  new Bouncer(formClassSelector, {
    customValidations: {
      // date: (field) => {
      //   return date(field);
      // },
      // isAtLeastOneCheckboxChecked: (field) => {
      //   return isAtLeastOneCheckboxChecked(field);
      // },
    },
    emitEvents: true,
    fieldClass: config.inputFieldErrorClass,
    errorClass: config.errorMessageClass,
    messages: validationMessages,
  });

const init = () => {
  if (!form) {
    return;
  }

  // Init the validation after loading bouncer
  loadValidation().then(() => {
    validate();
  });

  // Format date field
  // formatDateField();
};

export default init;
