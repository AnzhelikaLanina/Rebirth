import React from "react";
import ellipseConcave from "../../images/ellipse-concave.svg";
import ellipseConvex from "../../images/ellipse-convex.svg";
import flare from "../../images/flare.svg";
import bigLogo from "../../images/big-logo.svg";
import elfWoman from "../../images/elf-woman.svg";
import humanWar from "../../images/human-war.svg";
import circlesMain from "../../images/circles-main.svg";
import sparksLeft from "../../images/sparks-left.svg";
import sparksRight from "../../images/sparks-right.svg";
import sword from "../../images/sword.svg";
import tiedScroll from "../../images/tied-scroll.svg";
import Button from "../button/button";
import styles from "./title-section.module.css";
import Frame from "../frame/frame";
import {useNavigate} from "react-router-dom";

const TitleSection = ({ id }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <section className={styles.titleSection} id={id}>
            <div className={styles.background}></div>
            <div className={styles.shadow}></div>
            <img src={ellipseConcave} className={styles.ellipseConcave} alt="" />
            <img src={ellipseConvex} className={styles.ellipseConvex} alt="" />
            <img src={flare} className={styles.flare} alt="" />
            <img src={bigLogo} className={styles.logo} alt="" />
            <img src={elfWoman} className={styles.imageElfWoman} alt="" />
            <img src={humanWar} className={styles.imageWarHuman} alt="" />
            <img src={circlesMain} className={styles.circles} alt="" />
            <img src={sparksLeft} className={styles.sparksLeft} alt="" />
            <img src={sparksRight} className={styles.sparksRight} alt="" />
            <div className={styles.textBox}>
                <h1 className={styles.header}>Rebirth</h1>
                <h2 className={styles.subheader}>Твоя легенда начинается здесь</h2>
                <p className={styles.description}>Стабильный Лоу-рейт Essence x1 с превосходным комьюнити,
                    постоянной поддержкой и обновлениями</p>
                <Frame />
                <div className={styles.buttons}>
                    <Button
                        className={styles.buttonBlue}
                        text={"Начать игру"}
                        imgSrc={sword}
                        url={""}
                    />
                    <Button
                        className={styles.buttonYellow}
                        text={"Описание"}
                        imgSrc={tiedScroll}
                        onClick={() => handleNavigation('/wiki')}
                    />
                </div>
            </div>
        </section>
    );
}

export default TitleSection;