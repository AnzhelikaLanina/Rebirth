import styles from './WikiOfflineHuntingContent.module.css';
import {
  offlineHuntingData,
  useLocalizedData,
  mapWithLocalization, renderItemCards,
} from '@/shared/lib';
import { WikiComponentProps } from '@/shared/types';

export const WikiOfflineHuntingContent = ({ id }: WikiComponentProps) => {
  const { offlineHunting } = useLocalizedData();
  const localizedItemsOfflineHunting = mapWithLocalization(
    offlineHuntingData,
    offlineHunting,
    'text',
  );
  return (
    <div className={styles.content} id={id}>
      <div className={styles.info}>
        <h3 className={styles.header}>{offlineHunting.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItemsOfflineHunting)}
    </div>
  );
};
