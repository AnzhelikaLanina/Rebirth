import styles from './TableItem.module.css';
import clsx from 'clsx';

export const TableItem = ({ header, img, src, alt, text }) => {
  return (
    <div
      className={clsx(styles.tableElement, header && styles.tableElementHead)}
    >
      {img && <img src={src} className={styles.img} alt={alt} />}
      <p className={styles.tableText}>{text}</p>
    </div>
  );
};
