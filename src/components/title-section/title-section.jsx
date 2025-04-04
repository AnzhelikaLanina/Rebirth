import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./title-section.module.css";
import ellipseConcaveImage from "../../images/ellipse-concave.svg";
import ellipseConvexImage from "../../images/ellipse-convex.svg";
import flareImage from "../../images/flare.svg";
import logo from "../../images/big-logo.svg";
import elfWomanImage from "../../images/elf-woman.svg";
import humanWarImage from "../../images/human-war.svg";
import circlesImage from "../../images/circles-main.svg";
import sparksLeftImage from "../../images/sparks-left.svg";
import sparksRightImage from "../../images/sparks-right.svg";
import swordIcon from "../../images/sword.svg";
import scrollIcon from "../../images/tied-scroll.svg";
import Button from "../button/button";
import Frame from "../frame/frame";

const TitleSection = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <section className={styles.titleSection}>
            <div className={styles.background}></div>
            <div className={styles.shadow}></div>
            <div className={styles.imageContainer}>
                <img
                    src={ellipseConcaveImage}
                    className={styles.ellipseConcave}
                    alt={"вогнутый эллипс"}
                />
                <img
                    src={ellipseConvexImage}
                    className={styles.ellipseConvex}
                    alt={"выпуклый эллипс"}
                />
                <img
                    src={flareImage}
                    className={styles.flare}
                    alt={"луч света"}
                />
                <img
                    src={logo}
                    className={styles.logo}
                    alt={"логотип"}
                />
                <img
                    src={elfWomanImage}
                    className={styles.imageElfWoman}
                    alt={"эльфийка"}
                />
                <img
                    src={humanWarImage}
                    className={styles.imageWarHuman}
                    alt={"мужчина"}
                />
                <img
                    src={circlesImage}
                    className={styles.circles}
                    alt={"желтые огоньки"}
                />
            </div>
            <img
                src={sparksLeftImage}
                className={styles.sparksLeft}
                alt={"рыжие огоньки"}
            />
            <img
                src={sparksRightImage}
                className={styles.sparksRight}
                alt={"рыжие огоньки"}
            />
            <div className={styles.textBox}>
                <h1 className={styles.header}>Rebirth</h1>
                <h2 className={styles.subheader}>Твоя легенда начинается здесь</h2>
                <p className={styles.description}>Стабильный Лоу-рейт Essence x1 с превосходным комьюнити,
                    постоянной поддержкой и обновлениями</p>
                <Frame/>
                <div className={styles.buttons}>
                    <Button
                        className={styles.buttonBlue}
                        text={"Начать игру"}
                        imgSrc={swordIcon}
                        url={""}
                    />
                    <Button
                        className={styles.buttonYellow}
                        text={"Описание"}
                        imgSrc={scrollIcon}
                        onClick={() => handleNavigation('/wiki')}
                    />
                </div>
            </div>
        </section>
    );
};

export default TitleSection;