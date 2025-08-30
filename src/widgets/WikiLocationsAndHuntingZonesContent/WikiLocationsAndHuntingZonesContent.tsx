import styles from './WikiLocationsAndHuntingZonesContent.module.css';
import { Table } from '@/widgets';
import {
  locationsAndHuntingZonesData,
  mapWithLocalization,
  renderItemCards,
  rewardsItemsData,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiLocationsAndHuntingZonesContent = ({ id }: WikiComponentProps) => {
  const { locationsAndHuntingZones } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    locationsAndHuntingZonesData,
    locationsAndHuntingZones,
    'text'
  );
  const localizedItemsRewards = mapWithLocalization(
    rewardsItemsData,
    locationsAndHuntingZones.rewards,
    'text'
  );
  return (
    <WikiLayout
      title={locationsAndHuntingZones.header}
      id={id}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedItems)}
      <Table list={localizedItemsRewards} />
    </WikiLayout>
  )
}