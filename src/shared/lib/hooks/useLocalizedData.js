import { useLanguage } from './useLanguage';
import ru from '../../assets/locales/ru/ru';
import en from '../../assets/locales/en/en';

export const useLocalizedData = () => {
  const { language } = useLanguage();
  return language === 'ru' ? ru : en;
};
