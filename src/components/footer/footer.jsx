import React from 'react';
import styles from "./footer.module.css";
import logo from "../../images/logo.svg"
import polygon from "../../images/polygon.svg";
import {Link} from "react-router-dom";

const Footer = ({ onOpenModal }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <ul className={styles.info}>
                    <li className={styles.box}>
                        <img className={styles.logoName} src={logo} alt={"Логотип"} />
                        <div className={styles.line}></div>
                        <p className={styles.text}>Lineage 2 Essence x1 Server</p>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>Пользовательское соглашение</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>Политика конфиденциальности</a>
                    </li>
                </ul>
                <ul className={styles.links}>
                    <li className={styles.element1}>
                        <Link to="/wiki" className={styles.link}>Вики</Link>
                    </li>
                    <li className={styles.element2}>
                        <Link to="/patchnote" className={styles.link}>Патчноуты</Link>
                    </li>
                    <li className={styles.element3}>
                        <p onClick={onOpenModal} className={styles.link}>Файлы</p>
                    </li>
                    <li className={styles.element4}>
                        <a href="/" className={styles.link}>Регистрация</a>
                    </li>
                    <li className={styles.element5}>
                        <a href="/" className={styles.link}>Discord</a>
                    </li>
                    <li className={styles.element6}>
                        <a href="/" className={styles.link}>Личный кабинет</a>
                    </li>
                </ul>
                <div className={styles.description}>
                    <p className={styles.textDescription}>
                        Copyright &copy; 2024, Rebirth. Lineage is a trademark owned by NCSoft Corp, all rights reserved.
                    </p>
                    <div className={styles.designerBox}>
                        <p className={styles.textDescription}>Дизайн — UPNOVA</p>
                        <img className={styles.img} src={polygon} alt={"Стрелочка вниз"}/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;