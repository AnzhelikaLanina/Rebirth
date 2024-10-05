import React, { useState } from "react";
import styles from './navigation-patchnote.module.css';
import icon from '../../images/wheel-icon.svg';
import iconActive from '../../images/wheel-icon-active.svg';
import data from '../../data/patchnoteList.json';
import NavigationItem from "../navigation-item/navigation-item";

const NavigationPatchNote = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [{
            icon: icon,
            iconActive: iconActive,
            header: 'Обновление'
        }];

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.content}>
            {data.patchnoteList.map((item, index) => (
                <React.Fragment key={item.id}>
                    {index > 0 && index < data.patchnoteList.length && (
                        <div className={styles.boxLine}>
                            <div className={styles.line}></div>
                        </div>
                    )}
                    <div className={styles.item}>
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
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default NavigationPatchNote;