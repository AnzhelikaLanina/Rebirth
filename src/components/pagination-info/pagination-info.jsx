import styles from "./pagination-info.module.css";
import React from "react";
import line from "../../images/progress.svg";
import lineActive from "../../images/progress-active.svg";
import balanceIcon from "../../images/balance.svg";
import balanceActiveIcon from "../../images/balance-active.svg";
import craftIcon from "../../images/craft.svg";
import craftActiveIcon from "../../images/craft-active.svg";
import clansIcon from "../../images/clans.svg";
import clansActiveIcon from "../../images/clans-active.svg";
import olympIcon from "../../images/olymp.svg";
import olympActiveIcon from "../../images/olymp-active.svg";
import interfaceIcon from "../../images/interface.svg";
import interfaceActiveIcon from "../../images/interface-active.svg";
import PropTypes from "prop-types";

const PaginationInfo = ({ activeIndex, onClick }) => {
    const images = [
        {
            normalMain: balanceIcon,
            activeMain: balanceActiveIcon,
            normalLine: line,
            activeLine: lineActive
        },
        {
            normalMain: craftIcon,
            activeMain: craftActiveIcon,
            normalLine: line,
            activeLine: lineActive
        },
        {
            normalMain: clansIcon,
            activeMain: clansActiveIcon,
            normalLine: line,
            activeLine: lineActive
        },
        {
            normalMain: olympIcon,
            activeMain: olympActiveIcon,
            normalLine: line,
            activeLine: lineActive
        },
        {
            normalMain: interfaceIcon,
            activeMain: interfaceActiveIcon,
            normalLine: line,
            activeLine: lineActive
        },
    ];

    return (
        <div className={`swiper-pagination ${styles.pagination}`}>
            <div className={styles.images}>
                <div key={0} className={styles.item}>
                    <img
                        src={activeIndex === 0 ? images[0].activeMain : images[0].normalMain}
                        onClick={() => onClick(0)}
                        className={styles.images}
                        alt={"первый элемент"}
                    />
                    <img
                        src={activeIndex === 0 ? images[0].activeLine : images[0].normalLine}
                        onClick={() => onClick(0)}
                        className={styles.imageLineBalCraft }
                        alt={"линия элемента 1"}
                    />
                </div>
                {images.slice(1, 4).map((img, i) => (
                    <div key={i + 1} className={styles.item}>
                        <img
                            src={activeIndex === i + 1 ? img.activeLine : img.normalLine}
                            onClick={() => onClick(i + 1)}
                            className={i + 1 === 1 ? styles.imageLineBalCraft
                                        : i + 1 === 2 ? styles.imageLineCraftClans
                                        : styles.imageLineClansOlymp}
                            alt={`левая линия элемента ${i + 1}`}
                        />
                        <img
                            src={activeIndex === i + 1 ? img.activeMain : img.normalMain}
                            onClick={() => onClick(i + 1)}
                            className={styles.images}
                            alt={`элемент ${i + 1}`}
                        />
                        <img
                            src={activeIndex === i + 1 ? img.activeLine : img.normalLine}
                            onClick={() => onClick(i + 1)}
                            className={i + 1 === 2 ? styles.imageLineCraftClans
                                        : i + 1 === 3 ? styles.imageLineClansOlymp
                                        : styles.imageLineOlympInter}
                            alt={`правая линия элемента ${i + 1}`}
                        />
                    </div>
                ))}
                <div key={4} className={styles.item}>
                    <img
                        src={activeIndex === 4 ? images[4].activeLine : images[4].normalLine}
                        onClick={() => onClick(4)}
                        className={styles.imageLineOlympInter}
                        alt={"линия элемента 5"}
                    />
                    <img
                        src={activeIndex === 4 ? images[4].activeMain : images[4].normalMain}
                        onClick={() => onClick(4)}
                        className={styles.images}
                        alt={"элемент 5"}
                    />
                </div>
            </div>
            <div className={styles.description}>
                <p className={`${styles.text} ${styles.textLeft}`}>Баланс</p>
                <p className={styles.text}>Крафт</p>
                <p className={styles.text}>Кланы</p>
                <p className={`${styles.text} ${styles.textRight}`}>Олимпиада</p>
                <p className={`${styles.text} ${styles.textRight}`}>Интерфейс</p>
            </div>
        </div>
    )
};

PaginationInfo.propTypes = {
    activeIndex: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

export default PaginationInfo;