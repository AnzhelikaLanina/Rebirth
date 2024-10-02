import styles from "./navigation-main-page.module.css";
import vertLine from "../../images/nav-icon-vert-line.svg";
import horizLine from "../../images/nav-icon-horiz-line.svg";
import navIcon from "../../images/nav-icon.svg";
import navIconActive from "../../images/nav-icon-active.svg";

const NavigationMainPage = ({ activeSection, onNavigate }) => {
    return (
        <div className={styles.content}>
            <div className={styles.item} onClick={() => onNavigate('title')}>
                {activeSection === 'title' && <h2 className={styles.header}>Главная</h2>}
                <div className={styles.images}>
                    <img src={activeSection === 'title' ? horizLine : ''} className={styles.lineHoriz}/>
                    <img src={activeSection === 'title' ? navIconActive : navIcon} className={styles.figure}/>
                </div>
            </div>
            <div className={styles.box}>
                <img src={vertLine} className={styles.lineVert}/>
            </div>
            <div className={styles.item} onClick={() => onNavigate('features')}>
                {activeSection === 'features' && <h2 className={styles.header}>Особенности</h2>}
                <div className={styles.images}>
                    <img src={activeSection === 'features' ? horizLine : ''} className={styles.lineHoriz}/>
                    <img src={activeSection === 'features' ? navIconActive : navIcon} className={styles.figure}/>
                </div>
            </div>
            <div className={styles.box}>
                <img src={vertLine} className={styles.lineVert}/>
            </div>
            <div className={styles.item} onClick={() => onNavigate('news')}>
                {activeSection === 'news' && <h2 className={styles.header}>Новости</h2>}
                <div className={styles.images}>
                    <img src={activeSection === 'news' ? horizLine : ''} className={styles.lineHoriz}/>
                    <img src={activeSection === 'news' ? navIconActive : navIcon} className={styles.figure}/>
                </div>
            </div>
            <div className={styles.box}>
                <img src={vertLine} className={styles.lineVert}/>
            </div>
            <div className={styles.item} onClick={() => onNavigate('discord')}>
                {activeSection === 'discord' && <h2 className={styles.header}>Discord</h2>}
                <div className={styles.images}>
                    <img src={activeSection === 'discord' ? horizLine : ''} className={styles.lineHoriz}/>
                    <img src={activeSection === 'discord' ? navIconActive : navIcon} className={styles.figure}/>
                </div>
            </div>
        </div>
    );
};

export default NavigationMainPage;