import { useLanguage, ru, en } from '@/shared';

export const useLocalizedData = () => {
  const { language } = useLanguage();
  return language === 'ru' ? ru : en;
};
