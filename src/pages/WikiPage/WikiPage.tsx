import { useMediaQuery } from 'react-responsive';
import { WrapperWikiMobile, WrapperWiki } from '@/widgets';
import { MEDIA_BREAKPOINTS, PageLayout, useLocalizedData } from '@/shared';

export const WikiPage = () => {
  const isMobile = useMediaQuery({
    query: MEDIA_BREAKPOINTS.DESKTOP_MAX_WIDTH,
  });

  const { wiki } = useLocalizedData();
  return (
    <>
      <PageLayout title={wiki.header}>
        {isMobile ? <WrapperWikiMobile /> : <WrapperWiki />}
      </PageLayout>
    </>
  );
};
