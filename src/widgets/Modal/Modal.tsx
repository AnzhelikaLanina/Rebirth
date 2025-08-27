import {
  LineageIcon,
  BlueLogoIcon,
  UserIcon,
  RawIcon,
} from '@/shared/assets/images';
import styles from './Modal.module.css';
import { Button } from '@/shared/ui';
import { EXTERNAL_LINKS, openInNewTab } from '@/shared/lib';
import { ButtonDownload } from '@/widgets/Modal/ui';
import { createPortal } from 'react-dom';
import { ButtonClose } from '@/shared/ui/ButtonClose/ButtonClose';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [render, setRender] = useState(isOpen);
  const [visible, setVisible] = useState(false);

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

  const items = [
    {
      icon: LineageIcon,
      header: 'Игровой клиент (Eng + RU)',
      description: 'клиент игры',
      buttonGoogleHeader: 'Google Drive',
      buttonYandexDiscHeader: 'Yandex Disc',
      iconText: 'иконка lineage',
      linkGoogle: '',
      linkGYandex: ''
    },
    {
      icon: RawIcon,
      header: 'Игровой Патч',
      description: 'Разархивировать в папку с игрой',
      buttonGoogleHeader: 'Google Drive',
      buttonYandexDiscHeader: 'Yandex Disc',
      headerDownload: 'Скачать',
      iconText: 'иконка rar',
      linkGoogle: '',
      linkGYandex: ''
    },
    {
      icon: BlueLogoIcon,
      header: 'Апдейтер',
      description: 'Разархивировать в папку с игрой',
      buttonGoogleHeader: 'Google Drive',
      buttonYandexDiscHeader: 'Yandex Disc',
      headerDownload: 'Скачать',
      iconText: 'логотип',
      linkGoogle: '',
      linkGYandex: ''
    }
  ];

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
        <h2 className={styles.header}>Файлы для игры</h2>
        <ButtonClose onClose={onClose} />
      </div>
      <div className={styles.content}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.itemBox}>
              {item.icon && <item.icon className={styles.icon} />}
              <div className={styles.textBox}>
                <h3 className={styles.text}>{item.header}</h3>
                <p className={styles.textSmall}>{item.description}</p>
              </div>
            </div>
            <div className={styles.buttons}>
              <ButtonDownload
                link={item.linkGoogle}
                text={item.buttonGoogleHeader}
              />
              <ButtonDownload
                link={item.linkGYandex}
                text={item.buttonYandexDiscHeader}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footerBox}>
        <p className={styles.text}>Создайте игровой аккаунт</p>
        <Button
          className={styles.buttonBlue}
          icon={<UserIcon />}
          text={"Регистрация"}
          onClick={() => openInNewTab(EXTERNAL_LINKS.PERSONAL_ACCOUNT)}
        />
      </div>
    </div>
  </div>,
  document.getElementById('modal')!
)
}