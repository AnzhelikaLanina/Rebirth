import {useLanguage, useLocalizedData} from "../../lib/hooks";
import {Helmet} from "react-helmet-async";
import {useLocation} from "react-router-dom";
import {PATHS} from "../../lib/constants/paths";

export const HeadMeta = () => {
    const { language: lang } = useLanguage();
    const { pathname } = useLocation();
    const { metaTagsInfo } = useLocalizedData();

    const currentPageKey = (() => {
        if (pathname === PATHS.HOME) return 'mainPage';
        if (pathname.startsWith(PATHS.WIKI)) return 'wikiPage';
        return 'default';
    })();

    const meta = metaTagsInfo[currentPageKey] || metaTagsInfo.default;

    return (
        <Helmet htmlAttributes={{ lang }}>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description}/>
            <meta property="og:title" content={meta.title}/>
            <meta property="og:description" content={meta.description}/>
        </Helmet>
    )
};