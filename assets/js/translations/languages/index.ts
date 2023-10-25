import nl from './nl';

export type TranslationMessage = {
  [key: string]: string;
};

export type TranslationDomain = {
  [key: string]: TranslationMessage;
};

export type TranslationLanguage = {
  [key: string]: TranslationDomain;
};

export const languages: TranslationLanguage = {
  nl,
};
