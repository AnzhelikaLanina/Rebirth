import styles from "./pagination-info.module.css";
import React from "react";
import line from "../../images/progress.svg";
import lineActive from "../../images/progress-active.svg";
import balance from "../../images/balance.svg";
import balanceActive from "../../images/balance-active.svg";
import craft from "../../images/craft.svg";
import craftActive from "../../images/craft-active.svg";
import clans from "../../images/clans.svg";
import clansActive from "../../images/clans-active.svg";
import olymp from "../../images/olymp.svg";
import olympActive from "../../images/olymp-active.svg";
import interfaceImg from "../../images/interface.svg";
import interfaceActive from "../../images/interface-active.svg";

const PaginationInfo = ({ activeIndex, onClick }) => {
    const images = [
        {
            normalMain: balance,
            activeMain: balanceActive,
            normalLine: line,
            activeLine: lineActive
        },
        {
            normalMain: craft,
            activeMain: craftActive,
            normalLine: line,
            activeLine: lineActive
        },
        {
            normalMain: clans,
            activeMain: clansActive,
            normalLine: line,
            activeLine: lineActive
        },
        {
            normalMain: olymp,
            activeMain: olympActive,
            normalLine: line,
            activeLine: lineActive
        },
        {
            normalMain: interfaceImg,
            activeMain: interfaceActive,
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
                        alt={"Первый элемент"}
                    />
                    <img
                        src={activeIndex === 0 ? images[0].activeLine : images[0].normalLine}
                        onClick={() => onClick(0)}
                        className={styles.imageLineBalCraft }
                        alt={"Линия элемента 1"}
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
                            alt={`Левая линия элемента ${i + 1}`}
                        />
                        <img
                            src={activeIndex === i + 1 ? img.activeMain : img.normalMain}
                            onClick={() => onClick(i + 1)}
                            className={styles.images}
                            alt={`Элемент ${i + 1}`}
                        />
                        <img
                            src={activeIndex === i + 1 ? img.activeLine : img.normalLine}
                            onClick={() => onClick(i + 1)}
                            className={i + 1 === 2 ? styles.imageLineCraftClans
                                        : i + 1 === 3 ? styles.imageLineClansOlymp
                                        : styles.imageLineOlympInter}
                            alt={`Правая линия элемента ${i + 1}`}
                        />
                    </div>
                ))}
                <div key={4} className={styles.item}>
                    <img
                        src={activeIndex === 4 ? images[4].activeLine : images[4].normalLine}
                        onClick={() => onClick(4)}
                        className={styles.imageLineOlympInter}
                        alt={"Линия элемента 5"}
                    />
                    <img
                        src={activeIndex === 4 ? images[4].activeMain : images[4].normalMain}
                        onClick={() => onClick(4)}
                        className={styles.images}
                        alt={"Элемент 5"}
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
}

export default PaginationInfo;