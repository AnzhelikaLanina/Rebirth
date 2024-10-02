import styles from "./breadcrumbs.module.css";
import {Link} from "react-router-dom";
import homeImage from '../../images/home.svg';

const Breadcrumbs = ( {newsItemHeader} ) => {
    return (
        <nav className={styles.breadcrumbs} aria-label={'Хлебные крошки'}>
            <img src={homeImage} className={styles.image}/>
            <Link to="/" className={styles.link}>Главная</Link>
            <span className={styles.divider}> / </span>
            <Link to="/news" className={styles.link}>Новости</Link>
            <span className={styles.divider}> / </span>
            <span className={styles.newsHeader}>{newsItemHeader}</span>
        </nav>
    )
}

export default Breadcrumbs;