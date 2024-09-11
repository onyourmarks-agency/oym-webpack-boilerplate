import { type TranslationMessage } from '@translations/languages';

export const formvalidation: TranslationMessage = {
  'formvalidation.missingvalue.checkbox': 'This field is required.',
  'formvalidation.missingvalue.radio': 'Select a value.',
  'formvalidation.missingvalue.select': 'Select a value.',
  'formvalidation.missingvalue.select-multiple': 'Choose a value.',
  'formvalidation.missingvalue.default': 'This field is not (correctly) filled in.',

  'formvalidation.patternmismatch.email': 'Enter a valid email address.',
  'formvalidation.patternmismatch.url': 'Enter a valid url.',
  'formvalidation.patternmismatch.number': 'Enter a number.',
  'formvalidation.patternmismatch.color': 'Colors must have this notation: #rrggbb.',
  'formvalidation.patternmismatch.date': 'Use the date format: YYYY-MM-DD.',
  'formvalidation.patternmismatch.time': 'Use the 24 hour time format: For example 23:00.',
  'formvalidation.patternmismatch.month': 'Use the date format: YYYY-MM.',
  'formvalidation.patternmismatch.password': 'The password does not meet the requirements.',
  'formvalidation.patternmismatch.default': 'Use the correct format.',

  'formvalidation.outofrange.over': 'Choose a value with a max of {max}.',
  'formvalidation.outoforange.under': 'Choose a value higher or equal than {min}.',

  'formvalidation.wronglength.over':
    'Sorry. You have used too many characters. You are now using {length} characters and there is a maximum of {maxLength}.',
  'formvalidation.wronglength.under':
    'At least {minLength} characters are required in this field. You are now using {length} characters.',

  'formvalidation.custom.isatleastonecheckboxchecked': 'Select at least one option.',
  'formvalidation.custom.date': 'Make sure you select a day, month and year',
};
