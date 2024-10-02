import styles from "./header-mobile-menu.module.css";
import arrowDown from "../../images/arrow-down.svg";
import gearWheel from "../../images/gear-wheel.svg";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Button from "../button/button";
import discord from "../../images/ic_baseline-discord.svg";
import clarityUser from "../../images/clarity_user-solid.svg";
import flagRus from "../../images/flag-rus.svg";
import flagEn from "../../images/flag-en.svg";

const HeaderMobileMenu = ({openModal}) => {
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    // Функции для переключения состояния меню
    const toggleProjectDropdown = () => {
        setIsProjectOpen(prev => !prev);
    };

    const toggleLangDropdown = () => {
        setIsLangOpen(prev => !prev);
    };

    const closeProjectDropdown = (event) => {
        if (isProjectOpen && event.target.closest(`.${styles.dropDown}`) === null) {
            setIsProjectOpen(false);
        }
    };

    const closeLangDropdown = (event) => {
        if (isLangOpen && event.target.closest(`.${styles.dropDownLangs}`) === null) {
            setIsLangOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeProjectDropdown);
        document.addEventListener('click', closeLangDropdown);
        return () => {
            document.removeEventListener('click', closeProjectDropdown);
            document.removeEventListener('click', closeLangDropdown);
        };
    }, [isProjectOpen, isLangOpen]);
    return (
        <nav className={styles.nav}>
            <div className={styles.dropDown} onClick={toggleProjectDropdown}>
                <p className={`${styles.dropDownHeader} ${isProjectOpen ? styles.dropDownActiveHeader : ''}`}>о
                    проекте</p>
                <img src={arrowDown}
                     className={`${styles.dropDownArrow} ${isProjectOpen ? styles.rotate : ''}`}
                     alt={"Маленькая стрелочка"}/>
                <div className={`${styles.dropDownContainer} ${isProjectOpen ? styles.show : ''}`}>
                    <div className={styles.dropDownBox}>
                        <Link to="/wiki" className={styles.dropDownText}>Wiki</Link>
                        <Link to="/patchnote" className={styles.dropDownText}>Патчноуты</Link>
                    </div>
                </div>
            </div>
            <p className={styles.link} onClick={onOpenModal}>файлы</p>
            <a href="/" className={styles.link}>регистрация</a>
            <div className={styles.buttons}>
                <Button
                    className={styles.buttonPink}
                    imgSrc={discord}
                    text={"Сообщество"}
                    classNameText={''}
                    url={""}
                />
                <Button
                    className={styles.buttonBlue}
                    imgSrc={clarityUser}
                    text={"Личный кабинет"}
                    classNameText={''}
                    url={""}
                />
            </div>
            <div className={styles.dropDownLangs} onClick={toggleLangDropdown}>
                <img src={flagRus} alt={"Флаг России"}/>
                <p className={`${styles.text} ${isLangOpen ? styles.dropDownActiveHeader : ''}`}>Russian</p>
                <img src={arrowDown}
                     className={`${styles.dropDownArrow} ${isLangOpen ? styles.rotate : ''}`}
                     alt={"Маленькая стрелочка"}/>
                <div
                    className={`${styles.dropDownContainer} ${styles.dropDownContainerFlags} ${isLangOpen ? styles.show : ''}`}>
                    <div className={styles.dropDownLine}></div>
                    <div className={styles.dropDownBoxFlags}>
                        <img src={flagEn} className={styles.imageFlag} alt={"Флаг Великобритании"}/>
                        <Link to="/" className={styles.text}>English</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderMobileMenu;