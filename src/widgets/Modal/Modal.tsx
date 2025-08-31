import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import styles from './Modal.module.css';
import { ModalItem } from './ui';
import {
  Button,
  ButtonClose,
  EXTERNAL_LINKS,
  openInNewTab,
  UserIcon,
  useLocalizedData,
  modalItems,
} from '@/shared';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [render, setRender] = useState(isOpen);
  const [visible, setVisible] = useState(false);
  const { modal } = useLocalizedData();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isOpen) {
      setRender(true);
      setVisible(false);
      timeout = setTimeout(() => setVisible(true), 10);
    } else if (render) {
      setVisible(false);
      timeout = setTimeout(() => setRender(false), 300);
    }

    return () => clearTimeout(timeout);
  }, [isOpen, render]);

  const items = modalItems.map((item) => ({
    ...item,
    header: modal[item.key].header,
    description: modal[item.key].description,
    altIcon: modal[item.key].altIcon,
    buttonGoogleHeader: modal.buttonGoogle,
    buttonYandexDiscHeader: modal.buttonYandexDisc,
  }));

  return createPortal(
    <div
      className={clsx(styles.overlay, { [styles.overlayVisible]: visible })}
      onClick={onClose}
    >
      <div
        className={clsx(styles.modal, { [styles.modalVisible]: visible })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.headerBox}>
          <h2 className={styles.header}>{modal.header}</h2>
          <ButtonClose onClose={onClose} />
        </div>
        <div className={styles.content}>
          {items.map(({ key, ...props }) => (
            <ModalItem key={key} {...props} />
          ))}
        </div>
        <div className={styles.footerBox}>
          <p className={styles.text}>{modal.description}</p>
          <Button
            className={styles.buttonBlue}
            icon={<UserIcon />}
            text={modal.buttonReg}
            onClick={() => openInNewTab(EXTERNAL_LINKS.PERSONAL_ACCOUNT)}
          />
        </div>
      </div>
    </div>,
    document.getElementById('modal')!,
  );
};
