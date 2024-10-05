import styles from "./wrapper-wiki.module.css";
import { useState } from "react";
import NavigationWiki from "../navigation-wiki/navigation-wiki";
import WikiMainInfoContent from "../wiki-main-info-content/wiki-main-info-content";

const WrapperWiki = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const components = [
        <WikiMainInfoContent />,
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ];

    const renderContent = () => {
        return components[activeIndex] || <WikiMainInfoContent />;
    };

    return (
        <div className={styles.wrapper}>
            <NavigationWiki activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
            {renderContent()}
        </div>
    )
};

export default WrapperWiki;