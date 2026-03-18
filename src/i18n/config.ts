import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en.json';
import translationVI from './locales/vi.json';

export const defaultNS = 'translation';

export const resources = {
  en: { translation: translationEN },
  vi: { translation: translationVI },
} as const;

const languageDetector = new LanguageDetector();

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring'],
      caches: [],
      lookupQuerystring: 'lang',
    },
  });

export default i18n;
