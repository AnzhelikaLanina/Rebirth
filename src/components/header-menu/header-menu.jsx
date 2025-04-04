import React from "react";
import styles from "./header-menu.module.css";
import PropTypes from "prop-types";
import {PATHS} from "../../utils/constants/paths";
import {Link} from "react-router-dom";

const HeaderMenu = ({ onOpenModal }) => {
    return (
        <>
            <div className={styles.line}></div>
            <nav className={styles.nav}>
                <div className={styles.element}>
                    <Link to={PATHS.WIKI} className={styles.link}>о сервере</Link>
                </div>
                <div className={styles.element}>
                    <p className={styles.link} onClick={onOpenModal}>файлы</p>
                </div>
                <div className={styles.element}>
                    <a href="/" className={styles.link}>регистрация</a>
                </div>
            </nav>
        </>
    )
};

HeaderMenu.propTypes = {
    onOpenModal: PropTypes.func.isRequired
};

export default HeaderMenu;