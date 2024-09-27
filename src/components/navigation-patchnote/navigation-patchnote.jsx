import NavigationItem from "../navigation-item/navigation-item";
import icon from '../../images/wheel-icon.svg';
import iconActive from '../../images/wheel-icon-active.svg';
import styles from './navigation-patchnote.module.css';
import React, {useState} from "react";
import data from '../../data/patchnoteList.json';

const NavigationPatchNote = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [ {icon: icon, iconActive: iconActive, header: 'Обновление'} ];

    const handleItemClick = (index) => {
        setActiveIndex(index); // Обновляем активный индекс при нажатии
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
                            imgSrc={items[0].icon} // Используем одну и ту же иконку для всех элементов
                            header={items[0].header} // Одинаковый заголовок для всех
                            isActive={activeIndex === index} // Определяем активный элемент
                            onClick={() => handleItemClick(index)}
                            activeImgSrc={items[0].iconActive}
                            showDetails={true}
                            version={item.version}
                            date={item.date}// Активная иконка
                        />
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default NavigationPatchNote;