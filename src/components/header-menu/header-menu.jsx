import React from "react";
import styles from "./header-menu.module.css";
import DropDown from "../drop-down/drop-down";
import PropTypes from "prop-types";

const HeaderMenu = ({ onOpenModal }) => {
    return (
        <>
            <div className={styles.line}></div>
            <nav className={styles.nav}>
                <div className={styles.element}>
                    <DropDown
                        headerText="о проекте"
                        lang={false}
                    />
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