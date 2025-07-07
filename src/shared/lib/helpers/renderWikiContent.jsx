import { componentsWiki } from '../constants/componentsWiki';

export const renderWikiComponent = (index) => {
  const Component = componentsWiki[index];
  return Component ? <Component /> : null;
};
