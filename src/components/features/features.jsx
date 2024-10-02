import React from "react";
import styles from "./features.module.css";
import Ornament from "../ornament/ornament";
import lineHorizontal from "../../images/line-horizontal.svg";
import lineVertical from "../../images/line-vertical.svg";
import lineThickVertical from "../../images/line-thick-vertical.svg";
import SwiperInfo from "../swiper-info/swiper-info";
import sparksLeft from "../../images/sparks-features-left.svg";
import sparksRight from "../../images/sparks-features-right.svg";

const Features = ({ id }) => {

    const lineImages = {
        horizontalTop: lineHorizontal,
        horizontalBottom: lineHorizontal,
        verticalLeft: lineVertical,
        verticalRight: lineVertical,
        thickVerticalLeft: lineThickVertical,
        thickVerticalRight: lineThickVertical,
    };

    return (
        <section className={styles.features} id={id}>
            <h2 className={styles.header}>Уникальные особенности</h2>
            <img src={sparksLeft} className={styles.sparksLeft}/>
            <img src={sparksRight} className={styles.sparksRight}/>
            <div className={styles.patternBox}></div>
            <Ornament lineImages={lineImages}>
                <div className={styles.container}>
                    <div className={styles.overlay}></div>
                    <div className={styles.box}>
                        <SwiperInfo/>
                    </div>
                </div>
            </Ornament>
        </section>
    )
}

export default Features;