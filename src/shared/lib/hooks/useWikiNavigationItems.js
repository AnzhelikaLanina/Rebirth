import { useLocalizedData } from './useLocalizedData';
import { wikiNavData } from '../constants/wiki/wikiNavData';
import { mapWithLocalization } from '../utils/mapWithLocalization';

export const useWikiNavigationItems = () => {
  const { wiki } = useLocalizedData();
  return mapWithLocalization(wikiNavData, wiki);
};
