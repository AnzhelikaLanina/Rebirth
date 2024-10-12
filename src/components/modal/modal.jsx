import styles from './modal.module.css';
import iconClose from '../../images/close-icon.svg';
import userIcon from "../../images/clarity_user-solid.svg";
import iconRar from "../../images/raw-icon.svg";
import logo from "../../images/logo-icon-blue.svg";
import iconLineage from "../../images/lineage-icon.svg";
import Button from "../button/button";
import ButtonDownload from "../button-download/button-download";
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import { useEffect } from "react";

const Modal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (!isOpen) return;

        const handleEsc = (evt) => {
            if (evt.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]); // Добавляем isOpen в зависимости

    if (!isOpen) return null;

    const items = [
        {
            icon: iconLineage,
            header: 'Игровой клиент (Eng + RU)',
            description: 'пропатченный клиент игры /вес/',
            buttonGoogleHeader: 'Google Drive',
            buttonYandexDiscHeader: 'Yandex Disc',
            iconText: 'иконка lineage'
        },
        {
            icon: iconRar,
            header: 'Игровой Патч',
            description: 'Разархивировать в папку с игрой /вес/',
            buttonGoogleHeader: 'Google Drive',
            buttonYandexDiscHeader: 'Yandex Disc',
            headerDownload: 'Скачать',
            iconText: 'иконка rar'
        },
        {
            icon: logo,
            header: 'Апдейтер',
            description: 'Разархивировать в папку с игрой /вес/',
            buttonGoogleHeader: 'Google Drive',
            buttonYandexDiscHeader: 'Yandex Disc',
            headerDownload: 'Скачать',
            iconText: 'логотип'
        }
    ];

    return ReactDOM.createPortal(
        <section className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.headerBox}>
                    <h2 className={styles.header}>Файлы для игры</h2>
                    <img
                        src={iconClose}
                        alt="закрыть"
                        onClick={onClose}
                        className={styles.closeIcon}
                    />
                </div>
                <div className={styles.content}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.itemBox}>
                                <img
                                    src={item.icon}
                                    className={styles.icon}
                                    alt={`иконка ${item.iconText}`}
                                />
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
                        imgSrc={userIcon}
                        text={"Регистрация"}
                        classNameText={''}
                        url={""}
                    />
                </div>
            </div>
        </section>,
        document.getElementById('modal-root')
    )
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Modal;