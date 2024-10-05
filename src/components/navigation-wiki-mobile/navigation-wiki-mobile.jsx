import styles from "./navigation-wiki-mobile.module.css";
import React, {useState} from "react";
import mainInfoIcon from "../../images/main-info-icon.svg";
import mainInfoIconActive from "../../images/main-info-icon-active.svg";
import featuresIcon from "../../images/features-icon.svg";
import featuresIconActive from "../../images/features-icon-active.svg";
import clansIcon from "../../images/clans.svg";
import clansIconActive from "../../images/clans-active.svg";
import raidIcon from "../../images/raid-icon.svg";
import raidIconActive from "../../images/raid-icon-active.svg";
import olympIcon from "../../images/olymp.svg";
import olympIconActive from "../../images/olymp-active.svg";
import balanceIcon from "../../images/balance.svg";
import balanceIconActive from "../../images/balance-active.svg";
import sealsIcon from "../../images/seals-icon.svg";
import sealsIconActive from "../../images/seals-icon-active.svg";
import craftIcon from "../../images/craft.svg";
import craftIconActive from "../../images/craft-active.svg";
import interfaceIcon from "../../images/interface.svg";
import interfaceIconActive from "../../images/interface-active.svg";
import NavigationItem from "../navigation-item/navigation-item";
import WikiMainInfoContent from "../wiki-main-info-content/wiki-main-info-content";

const NavigationWikiMobile = () => {
    const [activeIndex, setActiveIndex] = useState(null);
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
        setActiveIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <div className={styles.list}>
            {items.map((item, index) => (
                <div key={index} className={styles.item}>
                    <NavigationItem
                        imgSrc={item.imgSrc}
                        header={item.header}
                        isActive={activeIndex === index}
                        onClick={() => handleItemClick(index)}
                        activeImgSrc={item.activeImgSrc}
                        showDetails={false}
                    />
                    {activeIndex === index && (
                        <WikiMainInfoContent content={index} />
                    )}
                </div>
            ))}
        </div>
    )
};

export default NavigationWikiMobile;