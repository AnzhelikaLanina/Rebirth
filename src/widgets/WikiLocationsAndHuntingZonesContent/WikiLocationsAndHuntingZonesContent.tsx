import styles from './WikiLocationsAndHuntingZonesContent.module.css';
import { mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';
import { Table } from '@/widgets';
import { rewardsItemsData } from '@/shared/lib/constants/wiki/rewardsItemsData';
import { locationsAndHuntingZonesData } from '@/shared/lib/constants/wiki/locationsAndHuntingZonesData';

export const WikiLocationsAndHuntingZonesContent = () => {
  const { locationsAndHuntingZones } = useLocalizedData();
  const localizedItems = mapWithLocalization(locationsAndHuntingZonesData, locationsAndHuntingZones, 'text');
  const localizedItemsRewards = mapWithLocalization(rewardsItemsData, locationsAndHuntingZones.rewards, 'text');
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{locationsAndHuntingZones.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
      <Table list={localizedItemsRewards} />
    </div>
  )
}