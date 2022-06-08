// import isAtLeastOneCheckboxChecked from './customvalidations/is-at-least-one-checkbox-checked';
// import date from './customvalidations/date';
import validationMessages from './validation-messages';

/**
 * Classnames used in Bouncer
 */
const formClassNames = {
  fieldClass: 'form__error',
  errorClass: 'form__input--error',
};

/**
 * Our default config
 */
const bouncerDefaultConfig = {
  customValidations: {
    // date: (field) => {
    //   return date(field);
    // },
    // isAtLeastOneCheckboxChecked: (field) => isAtLeastOneCheckboxChecked(field),
  },
  emitEvents: true,
  fieldClass: formClassNames.fieldClass,
  errorClass: formClassNames.errorClass,
  messages: validationMessages,
};

export { formClassNames, bouncerDefaultConfig };
