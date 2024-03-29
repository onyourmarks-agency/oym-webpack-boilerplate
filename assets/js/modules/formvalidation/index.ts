import loader from './loader';
import { bouncerDefaultConfig } from './config/config';
// import {formatDateField} from './helpers/format-date-field';

const formClassSelector: string = '.js-form-validate';

export const formValidation = async (): Promise<void> => {
  if (!document.querySelector(formClassSelector)) {
    return;
  }

  await loader();
  new window.Bouncer(formClassSelector, bouncerDefaultConfig);

  // Format date field
  // formatDateField();
};
