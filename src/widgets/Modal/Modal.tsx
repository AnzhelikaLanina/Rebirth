import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import styles from './Modal.module.css';
import { MODALS } from '@/shared';
import { DownloadContent, PromoCodeContent } from '@/widgets/Modal/content';

type ModalProps = {
  isOpen: boolean;
  type: string | null;
  onClose: () => void;
};

export const Modal = ({ isOpen, type, onClose }: ModalProps) => {
  const [render, setRender] = useState(isOpen);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isOpen) {
      setRender(true);
      timeout = setTimeout(() => setVisible(true), 10);
    } else if (render) {
      setVisible(false);
      timeout = setTimeout(() => setRender(false), 300);
    }

    return () => clearTimeout(timeout);
  }, [isOpen, render]);

  if (!render) return null;

  let content = null;

  switch (type) {
    case MODALS.DOWNLOAD:
      content = <DownloadContent onClose={onClose} />;
      break;

    case MODALS.PROMO_CODE:
      content = <PromoCodeContent onClose={onClose}  />;
      break;

    default:
      return null;
  }

  return createPortal(
    <div
      className={clsx(styles.overlay, { [styles.overlayVisible]: visible },  { [styles.overlayClosed]: !visible })}
      onClick={onClose}
    >
      <div
        className={clsx(styles.modal, { [styles.modalVisible]: visible })}
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </div>
    </div>,
    document.getElementById('modal')!,
  );
};
