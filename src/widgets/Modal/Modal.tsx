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
  ButtonDef,
} from '@/shared';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type ModalItemLocale = {
  header: string;
  description: string;
  altIcon: string;
  buttonGoogle?: string;
  buttonYandexDisc?: string;
  buttonMediafire?: string;
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

  const items = modalItems.map((item) => {
    const t = modal[item.key] as ModalItemLocale;

    const buttons: ButtonDef[] = [];
    if (t.buttonGoogle && item.linkGoogle) {
      buttons.push({ key: 'google', text: t.buttonGoogle, link: item.linkGoogle });
    }

    if (t.buttonMediafire && item.linkMediafire) {
      buttons.push({ key: 'mediafire', text: t.buttonMediafire, link: item.linkMediafire });
    }

    if (t.buttonYandexDisc && item.linkGYandex) {
      buttons.push({ key: 'yandex', text: t.buttonYandexDisc, link: item.linkGYandex });
    }

    return {
      ...item,
      header: t.header,
      description: t.description,
      altIcon: t.altIcon,
      buttons,
    };
  });

  const hasAnyButtons = items.some((item) => item.buttons.length > 0);

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

          {!hasAnyButtons && (
            <div className={styles.demoMessageBox}>
              <p className={styles.text}>
                {modal.demoMessage}
              </p>
            </div>
          )}

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
