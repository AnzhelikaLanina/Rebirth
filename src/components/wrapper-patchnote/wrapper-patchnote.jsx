import WikiMainInfoContent from "../wiki-main-info-content/wiki-main-info-content";
import styles from "./wrapper-patchnote.module.css";
import {useState} from "react";
import NavigationPatchNote from "../navigation-patchnote/navigation-patchnote";

const WrapperPatchnote = () => {
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
            <NavigationPatchNote activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
            {renderContent()} {/* Отображаем соответствующий контент */}
        </div>
    )
}

export default WrapperPatchnote;