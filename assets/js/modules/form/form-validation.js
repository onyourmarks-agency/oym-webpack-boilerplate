/* global Bouncer */
import loadValidation from './load-validation';
import validationMessages from './validation-messages';

const formClassSelector = '.js-form-validate';
const form = document.querySelector(formClassSelector);

/*
 * Validate the form
 */
const validate = () => new Bouncer(formClassSelector, {
  fieldClass: 'form__input--error',
  errorClass: 'form__error',
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
};

export default init;
