import images from "../../utils/constants/images";
import styles from "./wiki-world-trade-content.module.css";

const WikiWorldTradeContent = () => {
    const list = [
        {
            src: images.worldShop,
            alt: 'world shop',
            text: 'Валюта всемирной торговли Монета Эйнхасад и Адена.',
        },
        {
            src: images.worldShop,
            alt: 'world shop',
            text: 'Предусмотрена продажа и покупка снаряжения.'
        },
        {
            src: images.arenda,
            alt: 'arenda',
            text: 'Появилась возможность сдать или взять в аренду оружие и экипировку в интерфейсе мировой ' +
                'торговли за монеты эйнхасад.'
        }
    ]
    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <h3 className={styles.header}>Всемирная торговля</h3>
                <div className={styles.image}></div>
            </div>
            {list.map((item, index) => (
                <div className={styles.box} key={index}>
                    <img className={styles.img} src={item.src} alt={item.alt} />
                    <p className={styles.text}>{item.text}</p>
                </div>
            ))}
        </div>
    )
}

export default WikiWorldTradeContent