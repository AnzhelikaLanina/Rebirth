import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { scrollToTop } from '../utils/scrollToTop';
import { PATHS } from '../constants';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === PATHS.PROMO_CODES) return;

    scrollToTop();
  }, [pathname]);

  return null;
};
