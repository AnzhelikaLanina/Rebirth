import { useLocation } from 'react-router-dom';

export const useSectionFromUrl = () => {
  const location = useLocation();
  const section = new URLSearchParams(location.search).get('section');
  return section ? Number(section) : null;
};
