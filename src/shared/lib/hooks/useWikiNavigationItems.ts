import { wikiNavData } from '../constants/wiki/wikiNavData';
import { mapWithLocalization } from '../utils/mapWithLocalization';
import { useLocalizedData } from './useLocalizedData';

export const useWikiNavigationItems = () => {
  const { wiki } = useLocalizedData();
  return mapWithLocalization(wikiNavData, wiki, 'header');
};
