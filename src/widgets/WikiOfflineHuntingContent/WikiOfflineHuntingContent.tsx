import styles from './WikiOfflineHuntingContent.module.css';
import {
  offlineHuntingData,
  useLocalizedData,
  mapWithLocalization
} from '@/shared/lib';
import { TableItemProps } from '@/shared/types';

export const WikiOfflineHuntingContent = () => {
  const { offlineHunting } = useLocalizedData();
  const localizedItemsOfflineHunting = mapWithLocalization(
    offlineHuntingData,
    offlineHunting,
    'text',
  );
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{offlineHunting.header}</h3>
        <div className={styles.image} />
      </div>
      {localizedItemsOfflineHunting.map(
        (item: TableItemProps, index: number) => (
          <div className={styles.box} key={index}>
            <img className={styles.img} src={item.src} alt={item.alt} />
            <p className={styles.text}>{item.text}</p>
          </div>
        ),
      )}
    </div>
  );
};
