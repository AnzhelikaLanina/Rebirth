import styles from './WikiOfflineHuntingContent.module.css';
import { useLocalizedData } from '@/shared/lib/hooks';
import { mapWithLocalization } from '@/shared/lib/utils/mapWithLocalization';
import { offlineHuntingData } from '@/shared/lib/constants/offlineHuntingData';

export const WikiOfflineHuntingContent = () => {
  const { offlineHunting } = useLocalizedData();
  const localizedItemsOfflineHunting = mapWithLocalization(offlineHuntingData, offlineHunting);

  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{offlineHunting.header}</h3>
        <div className={styles.image} />
      </div>
      {localizedItemsOfflineHunting.map((item, index) => (
        <div className={styles.box} key={index}>
          <img className={styles.img} src={item.src} alt={item.alt} />
          <p className={styles.text}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
