import images from "../../utils/constants/images";
import styles from "./wiki-auto-hunting-content.module.css";

const WikiAutoHuntingContent = () => {
    const list = [
        {
            src: images.wheel,
            alt: 'wheel',
            text: 'возможность фиксированной зоны охоты',
        },
        {
            src: images.wheel,
            alt: 'wheel',
            text: 'постоянное переключение следующей цели без добивания предыдущей'
        },
        {
            src: images.wheel,
            alt: 'wheel',
            text: 'отключение рейдовых боссов в качестве целей во время автоматической охоты'
        },
        {
            src: images.wheel,
            alt: 'wheel',
            text: 'включение/выключение автоохоты при начале движения игроком'
        },
        {
            src: images.wheel,
            alt: 'wheel',
            text: 'изменение расстояния для ближней и дальней цели'
        }
    ]
    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <h3 className={styles.header}>Автоохота</h3>
                <div className={styles.image}></div>
            </div>
            <p className={styles.text}>Переработанная система автоохоты включает в себя:</p>
            {list.map((item, index) => (
                <div className={styles.box} key={index}>
                    <img className={styles.img} src={item.src} alt={item.alt}/>
                    <p className={styles.text}>{item.text}</p>
                </div>
            ))}
        </div>
    )
}

export default WikiAutoHuntingContent;