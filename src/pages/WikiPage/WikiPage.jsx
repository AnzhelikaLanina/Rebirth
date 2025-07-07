import '../page.css';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet-async';
import styles from './WikiPage.module.css';
import ru from '../../shared/assets/locales/ru/ru';
import en from '../../shared/assets/locales/en/en';
import { useLanguage } from '../../shared/lib/hooks';
import { WrapperWikiMobile, WrapperWiki } from '../../widgets';
import { SparksNewsBottomEffect, SparksNewsTopEffect } from '../../shared/assets/images';
import { MEDIA_BREAKPOINTS } from '../../shared/lib/constants/mediaQueries';

export const WikiPage = () => {
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.DESKTOP_MAX_WIDTH });
  const { language } = useLanguage();
  const data = language === 'ru' ? ru : en;
  return (
    <>
      <Helmet>
        <title>Описание сервера Rebirth</title>
      </Helmet>
      <div className="main">
        <SparksNewsTopEffect className="sparksTop" />
        <SparksNewsBottomEffect className="sparksBottom" />
        <div className="patternBox" />
        <div className={styles.headerBox}>
          <h1 className={styles.header}>{data.wiki.header}</h1>
        </div>
        {isDesktop ? <WrapperWikiMobile /> : <WrapperWiki />}
      </div>
    </>
  );
};
