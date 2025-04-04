import styles from "./wrapper-wiki.module.css";
import { useState } from "react";
import NavigationWiki from "../navigation-wiki/navigation-wiki";
import WikiMainInfoContent from "../wiki-main-info-content/wiki-main-info-content";
import WikiGameAssistantContent from "../wiki-game-assistant-content/wiki-game-assistant-content";
import WikiCostumesContent from "../wiki-costumes-content/wiki-costumes-content";
import WikiWorldTradeContent from "../wiki-world-trade-content/wiki-world-trade-content";
import WikiOfflineHuntingContent from "../wiki-offline-hunting-content/wiki-offline-hunting-content";
import WikiAutoHuntingContent from "../wiki-auto-hunting-content/wiki-auto-hunting-content";
import WikiRewardsForTasksContent from "../wiki-rewards-for-tasks-content/wiki-rewards-for-tasks-content";

const WrapperWiki = () => {
    const [activeIndex, setActiveIndex] = useState(0);

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
        <div className={styles.wrapper}>
            <NavigationWiki activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
            {renderContent()}
        </div>
    )
};

export default WrapperWiki;