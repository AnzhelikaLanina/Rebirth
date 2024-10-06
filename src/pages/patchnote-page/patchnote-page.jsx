import '../page.css';
import styles from "./patchnote-page.module.css";
import WrapperPatchNote from "../../components/wrapper-patchnote/wrapper-patchnote";
import sparksTopImage from "../../images/sparks-news-top.svg";
import sparksBottomImage from "../../images/sparks-news-bottom.svg";
import { useMediaQuery } from "react-responsive";
import NavigationPatchNoteMobile from "../../components/navigation-patchnote-mobile/navigation-patchnote-mobile";
import { Helmet } from "react-helmet-async";

const PatchNotePage = () => {
    const isDesktop = useMediaQuery({ query: '(max-width: 1450px)' });
    return (
        <>
            <Helmet>
                <title>{'Патчноуты Rebirth'}</title>
            </Helmet>
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
                    <h1 className={styles.header}>Патчноуты</h1>
                </div>
                {isDesktop ?
                    <NavigationPatchNoteMobile/>
                    :
                    <WrapperPatchNote/>
                }
            </div>
        </>
    )
};

export default PatchNotePage;