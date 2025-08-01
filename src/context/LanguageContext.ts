import { createContext } from 'react';

type LanguageContextType = {
  language: 'ru' | 'en';
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'ru',
  toggleLanguage: () => {},
});
