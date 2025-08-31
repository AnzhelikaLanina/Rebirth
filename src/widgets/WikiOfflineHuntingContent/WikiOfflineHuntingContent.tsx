import styles from './WikiOfflineHuntingContent.module.css';
import {
  mapWithLocalization,
  offlineHuntingData,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiOfflineHuntingContent = ({ id }: WikiComponentProps) => {
  const { offlineHunting } = useLocalizedData();
  const localizedItemsOfflineHunting = mapWithLocalization(
    offlineHuntingData,
    offlineHunting,
    'text',
  );
  return (
    <WikiLayout title={offlineHunting.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedItemsOfflineHunting)}
    </WikiLayout>
  );
};
