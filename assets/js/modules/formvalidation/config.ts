// import {isAtLeastOneCheckboxCheckedValidation} from './customvalidations/is-at-least-one-checkbox-checked';
// import {dateValidation} from './customvalidations/date';
import validationMessages from './validation-messages';

export const formClassNames = {
  fieldClass: 'form__error',
  errorClass: 'form__input--error',
};

export const bouncerDefaultConfig = {
  customValidations: {
    // date: (field: any) => dateValidation(field),
    // isAtLeastOneCheckboxChecked: (field: any) =>
    //   isAtLeastOneCheckboxCheckedValidation(field, formClassNames.errorClass),
  },
  emitEvents: true,
  fieldClass: formClassNames.fieldClass,
  errorClass: formClassNames.errorClass,
  messages: validationMessages,
};
