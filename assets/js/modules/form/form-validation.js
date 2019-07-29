import loadValidation from './load-validation';
import validationMessages from './validation-messages';

const formClassSelector = '.js-form-validate';
const form = document.querySelector(formClassSelector);

const init = function () {
  if (!form) {
    return;
  }

  // Init the validation after loading bouncer
  loadValidation.then(function () {
    validate();
  });
};

/*
 * Validate the form
 */
function validate() {
  new Bouncer(formClassSelector, {
    fieldClass: 'form__input--error',
    errorClass: 'form__error',
    messages: validationMessages,
  });
}

export default init;
