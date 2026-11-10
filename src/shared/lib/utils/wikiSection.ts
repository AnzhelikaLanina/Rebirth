import { wikiNavData } from '../constants/wiki/wikiNavData';
import { PATHS } from '../constants/common/paths';

export const getWikiSectionSlug = (key: string) =>
  key
    .replace(/Header$/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();

export const getWikiSectionIndex = (section: string | null) => {
  if (!section) return null;

  const bySlug = wikiNavData.findIndex(
    (nav) => getWikiSectionSlug(nav.key) === section,
  );
  if (bySlug >= 0) return bySlug;

  const byIndex = Number(section);
  return Number.isInteger(byIndex) &&
    byIndex >= 0 &&
    byIndex < wikiNavData.length
    ? byIndex
    : null;
};

export const getWikiSectionPath = (index: number | null) => {
  if (index === null) return PATHS.WIKI;

  const nav = wikiNavData[index];
  return nav
    ? `${PATHS.WIKI}?section=${getWikiSectionSlug(nav.key)}`
    : PATHS.WIKI;
};
