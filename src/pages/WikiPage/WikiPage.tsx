import { useMediaQuery } from 'react-responsive';
import styles from './WikiPage.module.css';
import { useLocalizedData } from '@/shared/lib';
import { WrapperWikiMobile, WrapperWiki } from '@/widgets';
import sparksNewsBottomEffect from '../../shared/assets/images/effects/sparks-news-bottom.svg?url';
import sparksNewsTopEffect from '../../shared/assets/images/effects/sparks-news-top.svg?url';
import { MEDIA_BREAKPOINTS } from '@/shared/lib/constants/common/mediaQueries';

export const WikiPage = () => {
  const isDesktop = useMediaQuery({
    query: MEDIA_BREAKPOINTS.DESKTOP_MAX_WIDTH,
  });

  const { wiki } = useLocalizedData();
  return (
    <>
      <div className={styles.page}>
        <img src={sparksNewsTopEffect} className={styles.sparksTop} />
        <img src={sparksNewsBottomEffect} className={styles.sparksBottom} />
        <div className={styles.patternBox} />
        <div className={styles.headerBox}>
          <h1 className={styles.header}>{wiki.header}</h1>
        </div>
        {isDesktop ? <WrapperWikiMobile /> : <WrapperWiki />}
      </div>
    </>
  );
};
