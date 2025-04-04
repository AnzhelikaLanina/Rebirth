import styles from "./wiki-offline-hunting-content.module.css";
import images from "../../utils/constants/images";

const WikiOfflineHuntingContent = () => {
    const list = [
        {
            src: images.offlineRune,
            alt: 'offline rune',
            text: 'Для активации необходимо в инвентаре персонажа иметь Руну Оффлайн Охоты и ввести команду в чате .offline.',
        },
        {
            src: images.offlineRune,
            alt: 'offline rune',
            text: 'Offline Охота доступна во всех локациях, включая Особые Зоны Охоты.'
        },
        {
            src: images.offlineRune,
            alt: 'offline rune',
            text: 'Ограничение - одно окно по HWID.'
        },
        {
            src: images.offlineRune,
            alt: 'offline rune',
            text: 'Руна доступна за монеты Эйнхасад в магазине.'
        }
    ]
    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <h3 className={styles.header}>Offline охота</h3>
                <div className={styles.image}></div>
            </div>
            {list.map((item, index) => (
                <div className={styles.box} key={index}>
                    <img className={styles.img} src={item.src} alt={item.alt}/>
                    <p className={styles.text}>{item.text}</p>
                </div>
            ))}
        </div>
    )
}

export default WikiOfflineHuntingContent;