import React from 'react';
import styles from "./footer.module.css";
import logo from "../../images/logo.svg"
import polygon from "../../images/polygon.svg";
import {Link} from "react-router-dom";

const Footer = () => {
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
                    <li>
                        <Link to="/wiki" className={styles.link}>Вики</Link>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>Регистрация</a>
                    </li>
                    <li>
                        <Link to="/patchnote" className={styles.link}>Патчноуты</Link>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>Discord</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>Файлы</a>
                    </li>
                    <li>
                        <a href="/" className={styles.link}>Личный кабинет</a>
                    </li>
                </ul>
                <div className={styles.description}>
                    <p className={styles.text}>
                        Copyright &copy; 2024, Rebirth. Lineage is a trademark owned by NCSoft Corp, all rights reserved.
                    </p>
                    <div className={styles.designerBox}>
                        <p className={styles.text}>Дизайн — UPNOVA</p>
                        <img className={styles.img} src={polygon} alt={"Стрелочка вниз"}/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;