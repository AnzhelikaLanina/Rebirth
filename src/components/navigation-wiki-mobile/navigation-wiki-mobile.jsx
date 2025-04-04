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
import WikiGameAssistantContent from "../wiki-game-assistant-content/wiki-game-assistant-content";
import WikiCostumesContent from "../wiki-costumes-content/wiki-costumes-content";
import WikiWorldTradeContent from "../wiki-world-trade-content/wiki-world-trade-content";
import WikiOfflineHuntingContent from "../wiki-offline-hunting-content/wiki-offline-hunting-content";
import WikiAutoHuntingContent from "../wiki-auto-hunting-content/wiki-auto-hunting-content";
import WikiRewardsForTasksContent from "../wiki-rewards-for-tasks-content/wiki-rewards-for-tasks-content";

const NavigationWikiMobile = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const items = [
        { imgSrc: mainInfoIcon, activeImgSrc: mainInfoIconActive, header: 'Основная информация' },
        { imgSrc: featuresIcon, activeImgSrc: featuresIconActive, header: 'Игровой помощник' },
        { imgSrc: clansIcon, activeImgSrc: clansIconActive, header: 'Костюмы' },
        { imgSrc: raidIcon, activeImgSrc: raidIconActive, header: 'Всемирная торговля' },
        { imgSrc: olympIcon, activeImgSrc: olympIconActive, header: 'Награды за задания' },
        { imgSrc: balanceIcon, activeImgSrc: balanceIconActive,header: 'Автоохота' },
        { imgSrc: sealsIcon, activeImgSrc: sealsIconActive, header: 'Offline охота' },
        { imgSrc: craftIcon, activeImgSrc: craftIconActive, header: 'Система крафта' },
        { imgSrc: interfaceIcon, activeImgSrc: interfaceIconActive, header: 'Интерфейс' }
    ];

    const handleItemClick = (index) => {
        setActiveIndex(prevIndex => prevIndex === index ? null : index);
    };

    const components = [
        <WikiMainInfoContent />,
        <WikiGameAssistantContent />,
        <WikiCostumesContent />,
        <WikiWorldTradeContent />,
        <WikiRewardsForTasksContent />,
        <WikiAutoHuntingContent />,
        <WikiOfflineHuntingContent />,
    ];

    const renderContent = () => {
        return components[activeIndex];
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
                        renderContent()
                    )}
                </div>
            ))}
        </div>
    )
};

export default NavigationWikiMobile;