import React, { ReactNode, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { Language } from '@/shared/types';
import { scrollToTop } from '@/shared/lib';

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const defaultLang =
    (localStorage.getItem('language') as Language) ||
    (navigator.language.startsWith('en') ? 'en' : 'ru');

  const [language, setLanguageState] = useState<Language>(defaultLang);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
    scrollToTop();
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
