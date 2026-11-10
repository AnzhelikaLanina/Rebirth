import { useLocation } from 'react-router-dom';
import { getWikiSectionIndex } from '../utils/wikiSection';

export const useSectionFromUrl = () => {
  const location = useLocation();
  const section = new URLSearchParams(location.search).get('section');
  return getWikiSectionIndex(section);
};
