import styles from './ButtonClose.module.css';
import { CloseIcon } from '@/shared/assets/images';

type ButtonCloseProps = {
  onClose: () => void;
};

export const ButtonClose = ({ onClose }: ButtonCloseProps) => {
  return (
    <button
      className={styles.buttonClose}
      onClick={onClose}
      aria-label="Закрыть меню"
    >
      <CloseIcon className={styles.closeIcon} />
    </button>
  )
}