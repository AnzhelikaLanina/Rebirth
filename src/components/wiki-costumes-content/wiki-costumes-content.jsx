import styles from "./wiki-costumes-content.module.css";
import images from "../../utils/constants/images";

const WikiCostumesContent = () => {
    const list = [
        {
            src: images.costumeIcon,
            alt: 'costume icon',
            text: 'Доступны уникальные изменения облика оружия, брони, венца героя и плаща.',
        },
        {
            src: images.costumeIcon,
            alt: 'costume icon',
            text: 'Интерфейс смены внешнего вида находится в игровом меню.'
        },
        {
            src: images.costumeIcon,
            alt: 'costume icon',
            text: 'Костюмы привязаны к аккаунту.'
        },
        {
            src: images.sAssassinArmorChange,
            alt: 's assassin armor change',
            text: 'В умениях персонажа появилось переключающееся умение Приоритет Костюма, которое отображает выбранный ' +
                'костюм, игнорируя измение облика умениями трансформации.'
        }
    ]
    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <h3 className={styles.header}>Костюмы</h3>
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

export default WikiCostumesContent;