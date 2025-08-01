import clsx from 'clsx';
import styles from './TableItem.module.css';
import { TableItemProps } from '@/shared/types';

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
      {image && <img src={src} className={styles.img} alt={alt} />}
      <p className={clsx(styles.tableText, header && styles.tableTextHead)}>
        {text}
      </p>
    </div>
  );
};
