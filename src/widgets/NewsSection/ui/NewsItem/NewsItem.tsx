import clsx from 'clsx';
import styles from './NewsItem.module.css';

type NewsItemProps = {
  headerText: string;
  descriptionText: string;
  itemStyle: string;
};

export const NewsItem = ({
  headerText,
  descriptionText,
  itemStyle,
}: NewsItemProps) => {
  return (
    <div className={clsx(styles.item, itemStyle)}>
      <div className={styles.overlay} />
      <div className={styles.containerSmall}>
        <h3 className={styles.headerSmall}>{headerText}</h3>
        <p className={styles.descriptionSmall}>{descriptionText}</p>
      </div>
    </div>
  );
};
