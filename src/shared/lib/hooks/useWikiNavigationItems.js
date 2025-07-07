import { useLocalizedData } from './useLocalizedData';
import { wikiNavData } from '../constants/wikiNavData';
import { mapWithLocalization } from '../utils/mapWithLocalization';

export const useWikiNavigationItems = () => {
  const { wiki } = useLocalizedData();
  return mapWithLocalization(wikiNavData, wiki);
};
