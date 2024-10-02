import styles from './modal.module.css';
import iconClose from '../../images/close-icon.svg';
import Button from "../button/button";
import clarityUser from "../../images/clarity_user-solid.svg";
import iconRaw from "../../images/raw-icon.svg";
import iconLogo from "../../images/logo-icon-blue.svg";
import iconLineage from "../../images/lineage-icon.svg";
import ButtonDownload from "../button-download/button-download";
import React from "react";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const items = [
        {
            icon: iconLineage,
            header: 'Игровой клиент (Eng + RU)',
            description: 'пропатченный клиент игры /вес/',
            buttonGoogleHeader: 'Google Drive',
            buttonYandexDiscHeader: 'Yandex Disc'
        },
        {
            icon: iconRaw,
            header: 'Игровой Патч',
            description: 'Разархивировать в папку с игрой /вес/',
            buttonGoogleHeader: 'Google Drive',
            buttonYandexDiscHeader: 'Yandex Disc',
            headerDownload: 'Скачать'
        },
        {
            icon: iconLogo,
            header: 'Апдейтер',
            description: 'Разархивировать в папку с игрой /вес/',
            buttonGoogleHeader: 'Google Drive',
            buttonYandexDiscHeader: 'Yandex Disc',
            headerDownload: 'Скачать'
        }
    ];

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.headerBox}>
                    <h2 className={styles.header}>Файлы для игры</h2>
                    <img src={iconClose} alt="Закрыть" onClick={onClose} className={styles.closeIcon} />
                </div>
                <div className={styles.content}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.itemBox}>
                                <img src={item.icon} className={styles.icon}/>
                                <div className={styles.textBox}>
                                    <h3 className={styles.text}>{item.header}</h3>
                                    <p className={styles.textSmall}>{item.description}</p>
                                </div>
                            </div>
                            <div className={styles.buttons}>
                                <ButtonDownload text={item.buttonGoogleHeader}/>
                                <ButtonDownload text={item.buttonYandexDiscHeader}/>
                                {item.headerDownload && (
                                    <ButtonDownload text={item.headerDownload} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.footerBox}>
                    <p className={styles.text}>Создайте игровой аккаунт</p>
                    <Button
                        className={styles.buttonBlue}
                        imgSrc={clarityUser}
                        text={"Регистрация"}
                        classNameText={''}
                        url={""}
                    />
                </div>
            </div>
        </div>
    )
}

export default Modal;