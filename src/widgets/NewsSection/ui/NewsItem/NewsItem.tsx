import clsx from 'clsx';
import styles from './NewsItem.module.css';

type NewsItemProps = {
  headerText: string;
  descriptionText: string;
  itemStyle?: string;
  size?: 'large' | 'small';
};

export const NewsItem = ({
  headerText,
  descriptionText,
  itemStyle,
  size = 'large',
}: NewsItemProps) => {
  const isLarge = size === 'large';

  const sizeContainerClass = isLarge
    ? styles.containerLarge
    : styles.containerSmall;

  const sizeHeaderClass = isLarge ? styles.headerLarge : styles.headerSmall;

  const sizeDescriptionClass = isLarge
    ? styles.descriptionLarge
    : styles.descriptionSmall;

  return (
    <div className={clsx(styles.item, itemStyle)}>
      <div className={styles.overlay} />
      <div className={sizeContainerClass}>
        <h3 className={sizeHeaderClass}>{headerText}</h3>
        <p className={sizeDescriptionClass}>{descriptionText}</p>
      </div>
    </div>
  );
};
