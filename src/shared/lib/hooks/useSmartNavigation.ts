import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToTop } from '@/shared';

export const useSmartNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname === path) {
      scrollToTop();
    } else {
      navigate(path);
    }
  };

  return { handleNavClick };
};
