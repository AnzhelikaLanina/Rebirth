import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../images/logo-small.svg";
import onlineIcon from "../../images/online.svg";
import menuIcon from "../../images/icon-menu.svg";
import HeaderMenu from "../header-menu/header-menu";
import DropDown from "../drop-down/drop-down";
import ButtonsHeaderSection from "../buttons-header-section/buttons-header-section";
import HeaderMenuMobile from "../header-menu-mobile/header-menu-mobile";
import PropTypes from "prop-types";
import {PATHS} from "../../utils/constants/paths";

const Header = ({ onOpenModal }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1265px)' });
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <Link to={PATHS.HOME} >
                            <img
                                className={styles.logo}
                                src={logo}
                                alt={"логотип"}
                            />
                        </Link>
                        <div className={styles.line}></div>
                        <div className={styles.onlineStatus}>
                            <img
                                src={onlineIcon}
                                alt={"изумрудный камень"}
                            />
                            <div className={styles.description}>
                                <p className={styles.textBig}>Online</p>
                                <p className={styles.textSmall}>Essence x1</p>
                            </div>
                        </div>
                        {isDesktop ?
                            <HeaderMenu onOpenModal={onOpenModal} />
                            :''}
                    </div>

                    {isDesktop ?
                        <div className={styles.boxRight}>
                            <DropDown headerText={"Russian"} lang={true}/>
                            <ButtonsHeaderSection />
                        </div>
                        :
                        <img
                            src={menuIcon}
                            className={styles.iconMenu}
                            alt={"полоски"}
                            onClick={toggleMenu}
                        />
                    }
                     <HeaderMenuMobile toggleMenu={toggleMenu} onOpenModal={onOpenModal} menuOpen={menuOpen}/>
                </div>
            </header>
    );
};

Header.propTypes = {
    onOpenModal: PropTypes.func.isRequired
};

export default Header;