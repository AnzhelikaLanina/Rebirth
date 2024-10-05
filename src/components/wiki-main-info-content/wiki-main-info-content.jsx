import styles from "./wiki-main-info-content.module.css";
import { useState } from "react";
import wheelIcon from "../../images/polygon-navigation.svg";
import arrow from "../../images/arrow-down-accordion.svg";

const WikiMainInfoContent = () => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const toggleAccordion = () => {
        setIsAccordionOpen(prev => !prev);
    };

    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <h3 className={styles.header}>Основная информация</h3>
                <div className={styles.box}>
                    <p className={styles.text}><span
                        className={styles.textColor}>Открытие сервера Eva-Project Essence</span> - 28 июня 20:00 GMT +3
                    </p>
                    <p className={styles.text}><span className={styles.textColor}>Начало ОБТ</span> - 25 июня 20:00 GMT
                        +3</p>
                    <p className={styles.text}><span className={styles.textColor}>Обновление</span> - Высшие эльфы.</p>
                    <p className={styles.text}><span className={styles.textColor}>Версия патча:</span> - Tampliers.
                        Обновления версий регулярны и быстрее СНГ/Европы.</p>
                </div>
                <div className={styles.box}>
                    <p className={styles.text}><span className={styles.textColor}>Рейты сервера:</span> EXP/SP x1, Adena
                        x1</p>
                    <p className={styles.text}><span className={styles.textColor}>Серверное время:</span> GMT +3</p>
                    <p className={styles.text}><span className={styles.textColor}>Количество клиентов на одном компьютере:</span> 1
                    </p>
                    <p className={styles.text}><span className={styles.textColor}>Максимально разрешенное количество компьютеров для игрока:</span> 3
                    </p>
                </div>
            </div>
            <div>
                <h3 className={styles.header}>Основная информация</h3>
                <ul className={styles.list}>
                    <li className={styles.element}>
                        <img src={wheelIcon}/>
                        <p className={styles.text}>Арена Олимпиады открыта по Пятницам и Субботам с 19:00 до 22:00 по
                            серверному времени (GMT+3);</p>
                    </li>
                    <li className={styles.element}>
                        <img src={wheelIcon}/>
                        <p className={styles.text}>Доступна активная кнопка блок бафа, при создании персонажа.</p>
                    </li>
                    <li className={styles.element}>
                        <img src={wheelIcon}/>
                        <p className={styles.text}>На сервере перерабон урон по мобам от физ классов.</p>
                    </li>
                    <li className={styles.element}>
                        <img src={wheelIcon}/>
                        <p className={styles.text}>Мы переработали квест The Zero Hour , теперь айтемы Fang of Stakato
                            падают сразу на всех
                            членов группы.</p>
                    </li>
                    <li className={styles.element}>
                        <img src={wheelIcon}/>
                        <p className={styles.text}>Залёт на Halisha/Anakazel доступен от 2-ух человек.</p>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className={styles.header}>Аугментация оружия</h3>
                <ul className={styles.list}>
                    <li className={styles.element}>
                        <img src={wheelIcon}/>
                        <p className={styles.text}>Активный баф с Life Stone пропадает при снятии оружия.</p>
                    </li>
                    <li className={styles.element}>
                        <img src={wheelIcon}/>
                        <p className={styles.text}>Аугментированное оружие не передается в трейде</p>
                    </li>
                    <li className={styles.element}>
                        <img src={wheelIcon}/>
                        <p className={styles.text}>На сервере перерабон урон по мобам от физ классов.</p>
                    </li>
                    <li className={styles.element}>
                        <img src={wheelIcon}/>
                        <p className={styles.text}>Шанс дропа Top Life Stones с Tyrannosaurus – 25%.</p>
                    </li>
                    <li className={styles.element}>
                        <img src={wheelIcon}/>
                        <p className={styles.text}>Шанс дропа Top Life Stones с Pterosaur – 5%.</p>
                    </li>
                </ul>
            </div>
            <div className={styles.table}>
                <div className={`${styles.tableElement} ${styles.tableElementHead}`}>
                    <p className={`${styles.tableText} ${styles.tableTextLeft}`}>Уровень эффекта</p>
                    <p className={styles.tableText}>Количество дополнительных аден</p>
                </div>
                <div className={styles.tableElement}>
                    <p className={`${styles.tableText} ${styles.tableTextLeft}`}>1</p>
                    <p className={styles.tableText}>Нет дополнительной награды</p>
                </div>
                <div className={styles.tableElement}>
                    <p className={`${styles.tableText} ${styles.tableTextLeft}`}>2</p>
                    <p className={styles.tableText}>200 000 000</p>
                </div>
                <div className={styles.tableElement}>
                    <p className={`${styles.tableText} ${styles.tableTextLeft}`}>3</p>
                    <p className={styles.tableText}>500 000 000</p>
                </div>
                <div className={styles.tableElement}>
                    <p className={`${styles.tableText} ${styles.tableTextLeft}`}>4</p>
                    <p className={styles.tableText}>2 000 000 000</p>
                </div>
                <div className={styles.tableElement}>
                    <p className={`${styles.tableText} ${styles.tableTextLeft}`}>5</p>
                    <p className={styles.tableText}>5 000 000 000</p>
                </div>
            </div>
            <div className={styles.accordion} onClick={toggleAccordion}>
                <div className={styles.accordionHeader}>
                    <p className={styles.text}>Заголовок аккордиона</p>
                    <img src={arrow} className={`${styles.arrow} ${isAccordionOpen ? styles.arrowOpen : ''}`} />
                </div>
                <div className={`${styles.accordionOpen} ${isAccordionOpen ? styles.open : ''}`}>
                    <p className={styles.text}>
                        Если вы занимаетесь стримами, создаете видеоконтент или ведете свой блог — этот раздел точно
                        будет полезен для вас. Здесь можно ознакомиться с каналами участников, а также более подробно
                        узнать о правилах и условиях наших партнерских программ
                    </p>
                </div>
            </div>
            <div className={styles.image}></div>
            <p className={styles.text}>Божественный Храмовник не может снять доспехи, он должен оставаться в них,
                чтобы постоянно контролировать силу света. Даже умения трансформации не могут изменить его внешний
                вид</p>
        </div>
    )
};

export default WikiMainInfoContent;