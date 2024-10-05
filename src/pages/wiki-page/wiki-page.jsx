import '../page.css';
import styles from "./wiki-page.module.css";
import WrapperWiki from "../../components/wrapper-wiki/wrapper-wiki";
import sparksTopImage from "../../images/sparks-news-top.svg";
import sparksBottomImage from "../../images/sparks-news-bottom.svg";
import { useMediaQuery } from "react-responsive";
import NavigationWikiMobile from "../../components/navigation-wiki-mobile/navigation-wiki-mobile";

const WikiPage = () => {
    const isDesktop = useMediaQuery({ query: '(max-width: 1450px)' });
    return (
        <div className={"main"}>
            <img
                src={sparksTopImage}
                className={"sparksTop"}
                alt={'рыжие огоньки'}
            />
            <img
                src={sparksBottomImage}
                className={"sparksBottom"}
                alt={'рыжие огоньки'}
            />
            <div className={"patternBox"}></div>
            <div className={styles.headerBox}>
                <h1 className={styles.header}>Описание сервера</h1>
            </div>
            {isDesktop?
                <NavigationWikiMobile />
                :
                <WrapperWiki/>
            }
        </div>
    )
};

export default WikiPage;