import styles from "./wiki-game-assistant-content.module.css";
import Table from "../table/table";
import {temporaryGameItems} from "../../utils/constants/info-wiki";
import images from "../../utils/constants/images";

const WikiGameAssistantContent = () => {
    const list = [
        {
            src: images.coupon,
            alt: 'coupon',
            text: 'Купоны поддержки игроки получают по мере развития персонажа, в стартовом наборе и в сундуке достижений.',
        },
        {
            src: images.coupon,
            alt: 'coupon',
            text: 'Доступен личный склад.'
        },
        {
            src: images.coupon,
            alt: 'coupon',
            text: 'Доступен бакалейщик.'
        },
        {
            src: images.pet,
            alt: 'pet',
            text: 'Доступен Сундук с Запечатанным Ожерельем Стража за 8кк адены.'
        },
        {
            src: images.ravenContract,
            alt: 'raven contract',
            text: 'С небольшим шансом из сундука с Запечатанным Ожерельем Стража можно получить нового стража Ворон.'
        },
        {
            src: images.vulkanContract,
            alt: 'vulkan contract',
            text: 'С очень маленьким шансом из сундука с Запечатанным Ожерельем Стража можно получить нового стража Вулкан.'
        },
        {
            src: images.couponStone,
            alt: 'coupon stone',
            text: 'Драгоценные камни и ларцы 1 и 2 уровня обмениваются на билет на выбранный драгоценный камень, ' +
                'который в свою очередь при накоплении возможно обменять на более высокий уровень камней.'
        },
        {
            src: images.essenceOfGiant,
            alt: 'essence of giant',
            text: 'Используя материалы: слиток металла, древесину, лак, металлограф, кожу или ткань можно произвести ' +
                'обмен на фрагмент реликвии Адена. которую при помощи Особого Создания с 30% шансом можно получить.'
        },
        {
            src: images.bmHeroBookMineral,
            alt: 'bm hero book mineral',
            text: 'Фрагмент Реликвии Адена при помощи Особого Создания с 30% шансом можно превратить в Дневник ' +
                'Исследователя Адена, необходимый для улучшения Лаборатории Адена.'
        },
        {
            src: images.soulBead,
            alt: 'soul bead',
            text: 'При разборе некоторого улучшенного снаряжения можно получить Большой Усиливающий Камень, ' +
                'необходимый для безопасного улучшения экипировки от +5 до +7.'
        },
        {
            src: images.scrollEpic,
            alt: 'scroll epic',
            text: 'При разборе эпической бижутерии с шансом можно получить Свиток Модифицировать Редкие Аксессуары и ' +
                'Улучшенный Свиток Модифицировать Редкие Аксессуары.'
        },
        {
            src: images.weaponSchlaeger,
            alt: 'weapon schlaeger',
            text: 'Доступно к продаже снаряжение NO Grade, D grade, C grade.'
        },
        {
            src: images.variationMineralHighBm,
            alt: 'variation mineral high bm',
            text: 'Вставить и извлечь Камни Зачарования также просто сделать в интерфейсе Игрового Помощника.'
        },
        {
            src: images.adenRuneHigh,
            alt: 'aden rune high',
            text: 'Доступна вставка и извлечение Кристалла Души в оружие и броню.'
        },
        {
            src: images.coin,
            alt: 'coin',
            text: 'Доступна передача некоторых предметов внутри аккаунта.'
        },
    ]
    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <h3 className={styles.header}>Игровой помощник</h3>
                <div className={styles.image}></div>
            </div>
            <Table list={temporaryGameItems}/>
            {list.map((item, index) => (
                <div className={styles.box} key={index}>
                    <img className={styles.img} src={item.src} alt={item.alt} />
                    <p className={styles.text}>{item.text}</p>
                </div>
            ))}
        </div>
    )
};

export default WikiGameAssistantContent;