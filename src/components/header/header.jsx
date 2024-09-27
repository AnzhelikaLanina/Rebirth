import styles from "./header.module.css";
import logoSmall from "../../images/logo-small.svg";
import online from "../../images/online.svg";
import arrowDown from "../../images/arrow-down.svg";
import Button from "../button/button";
import React, {useEffect, useState} from 'react';
import discord from "../../images/ic_baseline-discord.svg";
import clarityUser from "../../images/clarity_user-solid.svg";
import flagRus from "../../images/flag-rus.svg";
import flagEn from "../../images/flag-en.svg";
import gearWheel from "../../images/gear-wheel.svg";
import {Link, useNavigate } from "react-router-dom";

const Header = ({ onOpenModal }) => {
    const navigate = useNavigate(); // Хук для программной навигации

    const handleNavigation = (path) => {
        navigate(path); // Переход по заданному пути
    };

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
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <Link to="/" className={styles.logo}>
                        <img src={logoSmall} alt={"Логотип маленький"}/>
                    </Link>
                    <div className={styles.line}></div>
                    <div className={styles.onlineStatus}>
                        <img src={online} alt={"Значок онлайн"}/>
                        <div className={styles.description}>
                            <p className={styles.textBig}>Online</p>
                            <p className={styles.textSmall}>Essence x1</p>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <nav className={styles.nav}>
                        <div className={styles.element}>
                            <div className={styles.dropDown} onClick={toggleProjectDropdown}>
                                <p className={`${styles.dropDownHeader} ${isProjectOpen ? styles.dropDownActiveHeader : ''}`}>о
                                    проекте</p>
                                <img src={arrowDown}
                                     className={`${styles.dropDownArrow} ${isProjectOpen ? styles.rotate : ''}`}
                                     alt={"Маленькая стрелочка"}/>
                                <div className={`${styles.dropDownContainer} ${isProjectOpen ? styles.show : ''}`}>
                                    <div className={styles.dropDownLine}></div>
                                    <div className={styles.dropDownBox}>
                                        <div className={styles.dropDownWikiBox}>
                                            <img src={gearWheel} alt={"Значок шестерни"}/>
                                            <Link to="/wiki" className={styles.dropDownText}>Wiki</Link>
                                            <img src={gearWheel} alt={"Значок шестерни"}/>
                                        </div>
                                        <Link to="/patchnote" className={styles.dropDownText}>Патчноуты</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.element}>
                            <p className={styles.link} onClick={onOpenModal}>файлы</p>
                        </div>
                        <div className={styles.element}>
                            <Link to="/" className={styles.link}>регистрация</Link>
                        </div>
                    </nav>
                </div>
                <div className={styles.boxRight}>
                    <div className={styles.dropDownLangs} onClick={toggleLangDropdown}>
                        <img src={flagRus} alt={"Флаг России"}/>
                        <p className={`${styles.text} ${isLangOpen ? styles.dropDownActiveHeader : ''}`}>Russian</p>
                        <img src={arrowDown} className={`${styles.dropDownArrow} ${isLangOpen ? styles.rotate : ''}`}
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
            </div>
        </header>
    );
};

export default Header;