import React, {useState} from "react";
import icon from "../../images/wheel-icon.svg";
import iconActive from "../../images/wheel-icon-active.svg";
import data from "../../data/patchnoteList.json";
import styles from "./navigation-patchnote-mobile.module.css";
import NavigationItem from "../navigation-item/navigation-item";
import WikiMainInfoContent from "../wiki-main-info-content/wiki-main-info-content";

const NavigationPatchNoteMobile = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const items = [{
        icon: icon,
        iconActive: iconActive,
        header: 'Обновление'
    }];

    const handleItemClick = (index) => {
        setActiveIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <div className={styles.list}>
            {data.patchnoteList.map((item, index) => (
                <div key={index} className={styles.item}>
                    <NavigationItem
                        imgSrc={items[0].icon}
                        header={items[0].header}
                        isActive={activeIndex === index}
                        onClick={() => handleItemClick(index)}
                        activeImgSrc={items[0].iconActive}
                        showDetails={true}
                        version={item.version}
                        date={item.date}
                    />
                    {activeIndex === index && (
                        <WikiMainInfoContent />
                    )}
                </div>
            ))}
        </div>
    )
}

export default NavigationPatchNoteMobile;