import { translate } from '@translations/index';

export default {
  missingValue: {
    checkbox: translate('formvalidation.missingvalue.checkbox'),
    radio: translate('formvalidation.missingvalue.radio'),
    select: translate('formvalidation.missingvalue.select'),
    'select-multiple': translate('formvalidation.missingvalue.select-multiple'),
    default: translate('formvalidation.missingvalue.default'),
  },
  patternMismatch: {
    email: translate('formvalidation.patternmismatch.email'),
    url: translate('formvalidation.patternmismatch.url'),
    number: translate('formvalidation.patternmismatch.number'),
    color: translate('formvalidation.patternmismatch.color'),
    date: translate('formvalidation.patternmismatch.date'),
    time: translate('formvalidation.patternmismatch.time'),
    month: translate('formvalidation.patternmismatch.match'),
    password: translate('formvalidation.patternmismatch.password'),
    default: translate('formvalidation.patternmismatch.default'),
  },
  outOfRange: {
    over: translate('formvalidation.outofrange.over'),
    under: translate('formvalidation.outofrange.under'),
  },
  wrongLength: {
    over: translate('formvalidation.wronglength.over'),
    under: translate('formvalidation.wronglength.under'),
  },
  isAtLeastOneCheckboxChecked: translate('formvalidation.custom.isatleastonecheckboxchecked'),
  date: translate('formvalidation.custom.date'),
};
