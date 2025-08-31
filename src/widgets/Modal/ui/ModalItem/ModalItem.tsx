import styles from './ModalItem.module.css';
import { ButtonDownload } from '../ButtonDownload';

type ModalItemProps = {
  icon: string;
  header: string;
  description: string;
  buttonGoogleHeader: string;
  buttonYandexDiscHeader: string;
  linkGoogle: string;
  linkGYandex: string;
  altIcon: string;
};

export const ModalItem = ({
  icon,
  header,
  description,
  buttonGoogleHeader,
  buttonYandexDiscHeader,
  linkGoogle,
  linkGYandex,
  altIcon,
}: ModalItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemBox}>
        <img src={icon} className={styles.icon} alt={altIcon} />
        <div className={styles.textBox}>
          <h3 className={styles.text}>{header}</h3>
          <p className={styles.textSmall}>{description}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <ButtonDownload link={linkGoogle} text={buttonGoogleHeader} />
        <ButtonDownload link={linkGYandex} text={buttonYandexDiscHeader} />
      </div>
    </div>
  );
};
