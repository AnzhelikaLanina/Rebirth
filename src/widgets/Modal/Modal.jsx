import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import styles from './Modal.module.css';
import iconClose from '../../shared/assets/images/icons/close-icon.svg';
import userIcon from '../../shared/assets/images/icons/user.svg';
import { Button } from '../../shared/ui';

export const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (evt) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]); // Добавляем isOpen в зависимости

  if (!isOpen) return null;

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
        </div>
        <div className={styles.footerBox}>
          <p className={styles.text}>Создайте игровой аккаунт</p>
          <Button
            className={styles.buttonBlue}
            imgSrc={userIcon}
            text="Регистрация"
            classNameText=""
            url=""
          />
        </div>
      </div>
    </section>,
    document.getElementById('Modal-root'),
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
