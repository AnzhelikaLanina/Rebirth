import styles from "./wrapper-patchnote.module.css";
import { useState } from "react";
import NavigationPatchNote from "../navigation-patchnote/navigation-patchnote";
import WikiMainInfoContent from "../wiki-main-info-content/wiki-main-info-content";

const WrapperPatchNote = () => {
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
            <NavigationPatchNote activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
            {renderContent()}
        </div>
    )
};

export default WrapperPatchNote;