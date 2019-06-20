import loadValidation from './load-validation';
import validationMessages from './validation-messages';

const newsletterForm = document.querySelector('.js-form-validate');

const init = function () {
  if (!newsletterForm) {
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
  new Bouncer('.js-form-validate', {
    fieldClass: 'form__input--error',
    errorClass: 'form__error',
    messages: validationMessages,
  });
}

export default init;
