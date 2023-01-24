import loader from './loader';
import { bouncerDefaultConfig } from './config';
// import formatDateField from './format-date-field';

const formClassSelector = '.js-form-validate';

const init = () => {
  if (!document.querySelector(formClassSelector)) {
    return;
  }

  // Init the validation after loading bouncer
  loader().then(() => {
    new window.Bouncer(formClassSelector, bouncerDefaultConfig);
  });

  // Format date field
  // formatDateField();
};

export default init;
