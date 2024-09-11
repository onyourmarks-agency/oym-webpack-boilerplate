import { type TranslationMessage } from '@translations/languages';

export const formvalidation: TranslationMessage = {
  'formvalidation.missingvalue.checkbox': 'Dit veld is verplicht.',
  'formvalidation.missingvalue.radio': 'Selecteer een waarde.',
  'formvalidation.missingvalue.select': 'Selecteer een waarde.',
  'formvalidation.missingvalue.select-multiple': 'Kies een waarde.',
  'formvalidation.missingvalue.default': 'Dit veld is niet (correct) ingevuld.',

  'formvalidation.patternmismatch.email': 'Vul een geldig e-mailadres in.',
  'formvalidation.patternmismatch.url': 'Vul een geldige url in.',
  'formvalidation.patternmismatch.number': 'Vul een nummer in.',
  'formvalidation.patternmismatch.color': 'Kleuren moeten deze notatie hebben: #rrggbb.',
  'formvalidation.patternmismatch.date': 'Gebruik het datumformat: YYYY-MM-DD.',
  'formvalidation.patternmismatch.time': 'Gebruik het 24 uur tijdformaat: Bijvoorbeeld 23:00.',
  'formvalidation.patternmismatch.month': 'Gebruik het datumformat: YYYY-MM.',
  'formvalidation.patternmismatch.password': 'Het wachtwoord voldoet niet aan de eisen.',
  'formvalidation.patternmismatch.default': 'Gebruik het juiste format.',

  'formvalidation.outofrange.over': 'Kies een waarde met een maximum van {max}.',
  'formvalidation.outoforange.under': 'Kies een waarde met een mimimum van {min}.',

  'formvalidation.wronglength.over':
    'Sorry. Je hebt teveel karakters gebruikt. Je gebruikt nu {length} karakters en er is een maximum van {maxLength}.',
  'formvalidation.wronglength.under':
    'In dit veld zijn er minimaal {minLength} karakters nodig. Je gebruikt nu {length} karakters.',

  'formvalidation.custom.isatleastonecheckboxchecked': 'Selecteer minstens één optie.',
  'formvalidation.custom.date': 'Zorg dat je een dag, maand en jaar selecteerd',
};
