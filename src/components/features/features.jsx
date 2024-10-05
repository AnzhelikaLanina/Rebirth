import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./features.module.css";
import SwiperInfo from "../swiper-info/swiper-info";
import sparksLeftImage from "../../images/sparks-features-left.svg";
import sparksRightImage from "../../images/sparks-features-right.svg";
import frameMobileImage from "../../images/features-ornament-mobile.svg";
import frameImage from "../../images/ornament-features.svg";
import PropTypes from "prop-types";

const Features = ({ id }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1251px)' });

    return (
        <section className={styles.features} id={id}>
            <h2 className={styles.header}>Уникальные особенности</h2>
            <img
                src={sparksLeftImage}
                className={styles.sparksLeft}
                alt={'рыжие огоньки'}
            />
            <img
                src={sparksRightImage}
                className={styles.sparksRight}
                alt={'рыжие огоньки'}
            />
            <div className={styles.patternBox}></div>
            <div className={styles.ornamentBox}>
                {isDesktop ?
                    <img
                        src={frameImage}
                        className={styles.ornament}
                        alt={'рамка'}
                    />
                    :
                    <img
                        src={frameMobileImage}
                        className={styles.ornament}
                        alt={'рамка'}
                    />
                }
                <div className={styles.container}>
                    <div className={styles.overlay}></div>
                    <div className={styles.box}>
                        <SwiperInfo/>
                    </div>
                </div>
            </div>
        </section>
    )
};

Features.propTypes = {
    id: PropTypes.string.isRequired
};

export default Features;