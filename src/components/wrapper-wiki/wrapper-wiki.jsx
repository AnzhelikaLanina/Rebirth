import NavigationWiki from "../navigation-wiki/navigation-wiki";
import WikiMainInfoContent from "../wiki-main-info-content/wiki-main-info-content";
import styles from "./wrapper-wiki.module.css";
import {useState} from "react";

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
        return components[activeIndex] || <WikiMainInfoContent />; // Возвращаем компонент по активному индексу
    };

    return (
        <div className={styles.wrapper}>
            <NavigationWiki activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
            {renderContent()} {/* Отображаем соответствующий контент */}
        </div>
    )
}

export default WrapperWiki;