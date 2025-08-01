import React, { ReactNode, useState } from 'react';
import { LanguageContext } from './LanguageContext';

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'ru' ? 'en' : 'ru'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
