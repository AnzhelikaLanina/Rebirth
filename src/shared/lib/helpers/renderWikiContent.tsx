import { componentsWiki } from '@/shared/lib';

export const renderWikiComponent = (index: number) => {
  const Component = componentsWiki[index];
  return Component ? <Component /> : null;
};
