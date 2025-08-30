import { createContext } from 'react';
import { Language } from '@/shared';

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'ru',
  toggleLanguage: () => {},
  setLanguage: () => {},
});
