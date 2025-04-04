import styles from "./wiki-main-info-content.module.css";
import Table from "../table/table";
import {mainInfoWikiWithoutPremium, mainInfoWikiWithPremium} from "../../utils/constants/info-wiki";

const WikiMainInfoContent = () => {

    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <h3 className={styles.header}>Основная информация</h3>
                <div className={styles.image}></div>
                <div className={styles.box}>
                    <p className={styles.text}><span
                        className={styles.textColor}>Открытие сервера </span>
                        - 27 июня 20:00 GMT +3.
                    </p>
                    <p className={styles.text}>
                        <span className={styles.textColor}>Начало ОБТ </span>
                        - 10 июня 20:00 GMT +3.
                    </p>
                    <p className={styles.text}>
                        <span className={styles.textColor}>Серверное время: </span>
                        GMT +3.
                    </p>
                    <p className={styles.text}>
                        <span className={styles.textColor}>Обновление </span>
                        - Wolf, последующие регулярные обновления версии.
                    </p>
                    <p className={styles.text}>
                        <span className={styles.textColor}>Разрешенное количество  клиентов на одном компьютере: </span>
                        без ограничений.
                    </p>
                </div>
            </div>
            <Table list={mainInfoWikiWithoutPremium} />
            <Table list={mainInfoWikiWithPremium} />
        </div>
    )
};

export default WikiMainInfoContent;