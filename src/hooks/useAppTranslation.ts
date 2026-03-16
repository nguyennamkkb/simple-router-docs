import { useTranslation } from 'react-i18next';

export const useAppTranslation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'vi') => {
    i18n.changeLanguage(lng);
  };

  return {
    t,
    i18n,
    currentLanguage: i18n.language,
    changeLanguage,
  };
};
