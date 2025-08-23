import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { scrollToTop } from '@/shared/lib';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
};
