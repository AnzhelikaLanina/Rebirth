import clsx from 'clsx';
import styles from './TableItem.module.css';
import { TableItemProps, parseTextWithIcons } from '@/shared';

export const TableItem = ({
  header,
  image,
  src,
  alt,
  text,
}: TableItemProps) => {
  return (
    <div
      className={clsx(styles.tableElement, header && styles.tableElementHead)}
    >
      {image && src && <img src={src} className={styles.img} alt={alt} />}
      <p className={clsx(styles.tableText, header && styles.tableTextHead)}>
        {parseTextWithIcons(text)}
      </p>
    </div>
  );
};
