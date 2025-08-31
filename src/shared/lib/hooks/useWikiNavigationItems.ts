import {
  useLocalizedData,
  wikiNavData,
  mapWithLocalization,
} from '@/shared/lib';

export const useWikiNavigationItems = () => {
  const { wiki } = useLocalizedData();
  return mapWithLocalization(wikiNavData, wiki, 'header');
};
