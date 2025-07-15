import { componentsWiki } from '../constants/wiki/componentsWiki';

export const renderWikiComponent = (index) => {
  const Component = componentsWiki[index];
  return Component ? <Component /> : null;
};
