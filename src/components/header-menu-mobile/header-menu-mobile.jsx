import React from "react";
import styles from "./header-menu-mobile.module.css";
import iconClose from "../../images/close-icon.svg";
import ButtonsHeaderSection from "../buttons-header-section/buttons-header-section";
import DropDown from "../drop-down/drop-down";
import PropTypes from "prop-types";

const HeaderMenuMobile = ({ toggleMenu, onOpenModal, menuOpen }) => {
    return (
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
            <img
                src={iconClose}
                alt="закрыть"
                onClick={toggleMenu}
                className={styles.closeIcon}
            />
            <div className={styles.box}>
                <DropDown headerText={"о проекте"} lang={false} toggleMenu={toggleMenu}/>
                <p className={styles.link} onClick={() => {
                    onOpenModal();
                    toggleMenu();
                }}>файлы</p>
                <a href="/" className={styles.link} onClick={toggleMenu}>регистрация</a>
                <ButtonsHeaderSection onClick={toggleMenu} />
                <DropDown headerText={"Russian"} lang={true} toggleMenu={toggleMenu}/>
            </div>
        </nav>
    )
};

HeaderMenuMobile.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    onOpenModal: PropTypes.func.isRequired,
    menuOpen: PropTypes.bool.isRequired
};

export default HeaderMenuMobile;