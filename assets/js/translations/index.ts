import translator from 'bazinga-translator';
import { languages, type TranslationDomain } from './languages';

translator.fallback = 'nl';
translator.defaultDomain = 'general';

Object.keys(languages).forEach((language: string): void => {
  const translations: TranslationDomain = languages[language];

  Object.keys(translations).forEach((translationDomain: string): void => {
    Object.keys(translations[translationDomain]).forEach((translationKey: string): void => {
      translator.add(
        translationKey,
        translations[translationDomain][translationKey],
        'general',
        language,
      );
    });
  });
});

export const translate = (key: string, parameters?: any, domain?: string, locale?: string) =>
  translator.trans(key, parameters, domain, locale);
