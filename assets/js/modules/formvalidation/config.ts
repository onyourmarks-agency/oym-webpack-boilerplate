// import isAtLeastOneCheckboxChecked from './customvalidations/is-at-least-one-checkbox-checked';
// import date from './customvalidations/date';
import validationMessages from './validation-messages';

const formClassNames = {
  fieldClass: 'form__error',
  errorClass: 'form__input--error',
};

const bouncerDefaultConfig = {
  customValidations: {
    // date: (field: any) => date(field),
    // isAtLeastOneCheckboxChecked: (field: any) =>
    //   isAtLeastOneCheckboxChecked(field, formClassNames.errorClass),
  },
  emitEvents: true,
  fieldClass: formClassNames.fieldClass,
  errorClass: formClassNames.errorClass,
  messages: validationMessages,
};

export { formClassNames, bouncerDefaultConfig };
