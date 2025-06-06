import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./drop-down.module.css";
import arrowActive from "../../images/arrow-down.svg";
import arrow from "../../images/arrow-down-accordion.svg";
import flagRusImage from "../../images/flag-rus.svg";
import flagEnImage from "../../images/flag-en.svg";
import PropTypes from "prop-types";

const DropDown = ({ headerText, lang, toggleMenu }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const closeDropdown = (event) => {
        if (isOpen && event.target.closest(`.${styles.dropDown}`) === null) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeDropdown);
        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, [isOpen]);

    return (
        <div className={styles.dropDown} onClick={toggleDropdown}>
            <div className={styles.box}>
                {lang ?
                    <img
                        src={flagRusImage}
                        alt={"флаг России"}
                    />
                : ''}
                <p className={`${styles.header} ${lang ? styles.headerLang : ''} ${isOpen ? styles.headerActive : ''}`}>
                    {headerText}
                </p>
                <img
                    src={isOpen ? arrowActive : arrow}
                    className={`${styles.dropDownArrow} ${isOpen ? styles.rotate : ''}`}
                    alt="стрелка"
                />
            </div>
            <div className={`${styles.dropDownContainer} ${isOpen ? styles.show : ''}`}>
                <div className={styles.dropDownLine}></div>
                {lang ?
                    <div className={styles.dropDownBoxFlags}>
                        <img
                            src={flagEnImage}
                            className={styles.imageFlag}
                            alt={"флаг Великобритании"}
                        />
                        <Link to="/" className={styles.text} onClick={toggleMenu}>English</Link>
                    </div> : ''
                }
            </div>
        </div>
    )
};

export default DropDown;

DropDown.propTypes = {
    headerText: PropTypes.string.isRequired,
    lang: PropTypes.bool.isRequired
}