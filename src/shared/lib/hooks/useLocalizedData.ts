import { en, ru } from '@/shared/assets/locales';
import { useLanguage } from './useLanguage';

export const useLocalizedData = () => {
  const { language } = useLanguage();
  return language === 'ru' ? ru : en;
};
