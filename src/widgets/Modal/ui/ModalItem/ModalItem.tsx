import styles from './ModalItem.module.css';
import { ButtonDownload } from '../ButtonDownload';
import { ButtonDef } from '@/shared';

type ModalItemProps = {
  icon: string;
  header: string;
  description: string;
  altIcon: string;
  buttons: ButtonDef[];
};

export const ModalItem = ({
  icon,
  header,
  description,
  altIcon,
  buttons,
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
        {buttons.map((b) => (
          <ButtonDownload key={b.key} link={b.link} text={b.text} />
        ))}
      </div>
    </div>
  );
};
