import React from "react";
import styles from "./navigation-wiki.module.css";
import NavigationItem from "../navigation-item/navigation-item";
import featuresIcon from "../../images/features-icon.svg";
import raidIcon from "../../images/raid-icon.svg";
import sealsIcon from "../../images/seals-icon.svg";
import craftIcon from "../../images/craft.svg";
import balanceIcon from "../../images/balance.svg";
import olympIcon from "../../images/olymp.svg";
import clansIcon from "../../images/clans.svg";
import interfaceIcon from "../../images/interface.svg";
import mainInfoIcon from "../../images/main-info-icon.svg";
import mainInfoIconActive from "../../images/main-info-icon-active.svg";
import featuresIconActive from "../../images/features-icon-active.svg";
import raidIconActive from "../../images/raid-icon-active.svg";
import sealsIconActive from "../../images/seals-icon-active.svg";
import craftIconActive from "../../images/craft-active.svg";
import balanceIconActive from "../../images/balance-active.svg";
import olympIconActive from "../../images/olymp-active.svg";
import clansIconActive from "../../images/clans-active.svg";
import interfaceIconActive from "../../images/interface-active.svg";
import PropTypes from "prop-types";

const NavigationWiki = ({ activeIndex, setActiveIndex }) => {

    const items = [
        { imgSrc: mainInfoIcon, activeImgSrc: mainInfoIconActive, header: 'Основная информация' },
        { imgSrc: featuresIcon, activeImgSrc: featuresIconActive, header: 'Особенности сервера' },
        { imgSrc: clansIcon, activeImgSrc: clansIconActive, header: 'Кланы и осады' },
        { imgSrc: raidIcon, activeImgSrc: raidIconActive, header: 'Рейд боссы и эпики' },
        { imgSrc: olympIcon, activeImgSrc: olympIconActive, header: 'Олимпиада' },
        { imgSrc: balanceIcon, activeImgSrc: balanceIconActive,header: 'Баланс классов' },
        { imgSrc: sealsIcon, activeImgSrc: sealsIconActive, header: 'Семь печатей' },
        { imgSrc: craftIcon, activeImgSrc: craftIconActive, header: 'Система крафта' },
        { imgSrc: interfaceIcon, activeImgSrc: interfaceIconActive, header: 'Интерфейс' }
    ];

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.content}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {index > 0 && index < items.length &&
                        <div className={styles.boxLine}>
                            <div className={styles.line}></div>
                        </div>}
                    <NavigationItem
                        imgSrc={item.imgSrc}
                        header={item.header}
                        isActive={activeIndex === index}
                        onClick={() => handleItemClick(index)}
                        activeImgSrc={item.activeImgSrc}
                        showDetails={false}
                    />
                </React.Fragment>
            ))}
        </div>
    )
};

NavigationWiki.propTypes = {
    activeIndex: PropTypes.number.isRequired,
    setActiveIndex: PropTypes.func.isRequired,
};

export default NavigationWiki;