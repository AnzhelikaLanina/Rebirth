import styles from "./breadcrumbs.module.css";
import { Link } from "react-router-dom";
import homeIcon from '../../images/home.svg';
import PropTypes from "prop-types";

const Breadcrumbs = ({ newsItemHeader }) => {
    return (
        <nav className={styles.breadcrumbs} aria-label={'Хлебные крошки'}>
            <img src={homeIcon} className={styles.image} alt={'дом'}/>
            <Link to="/" className={styles.link}>Главная</Link>
            <span className={styles.divider}> / </span>
            <Link to="/news" className={styles.link}>Новости</Link>
            <span className={styles.divider}> / </span>
            <span className={styles.newsHeader}>{newsItemHeader}</span>
        </nav>
    )
};

Breadcrumbs.propTypes = {
    newsItemHeader: PropTypes.string.isRequired
};

export default Breadcrumbs;