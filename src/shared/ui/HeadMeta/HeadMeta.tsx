import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage, useLocalizedData, PATHS } from '@/shared/lib';

export const HeadMeta = () => {
  const { language: lang } = useLanguage();
  const { pathname } = useLocation();
  const { metaTagsInfo } = useLocalizedData();

  const currentPageKey = (() => {
    if (pathname === PATHS.HOME) return 'mainPage';
    if (pathname === PATHS.WIKI) return 'wikiPage';
    if (pathname === PATHS.USER_AGREEMENT) return 'userAgreementPage';
    if (pathname === PATHS.PRIVACY_POLICY) return 'privacyPolicyPage';
    console.warn('[HeadMeta] Missing meta config for path:', pathname);
    return 'mainPage';
  })();

  const page = metaTagsInfo[currentPageKey] || metaTagsInfo.mainPage;
  const title = page.title;
  const description = metaTagsInfo.description;
  const keywords = metaTagsInfo.keywords;
  const ogLocale = lang === 'ru' ? 'ru_RU' : 'en_US';

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={ogLocale} />
    </Helmet>
  );
};
