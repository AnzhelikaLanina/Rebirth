import styles from './modal.module.css';
import iconClose from '../../images/close-icon.svg';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Не рендерить, если модал не открыт


    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div>
                    <h2 className={styles.header}>Файлы для игры</h2>
                    <img src={iconClose} alt="Закрыть" onClick={onClose}  />
                </div>
            </div>
        </div>
    )
}

export default Modal;