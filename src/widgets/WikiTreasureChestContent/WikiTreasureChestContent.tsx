import styles from './WikiTreasureChestContent.module.css';
import { Table } from '@/widgets';
import {
  chestContentItemsData,
  locationsItemsData,
  mapWithLocalization,
  renderItemCards,
  treasureChestData,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiTreasureChestContent = ({ id }: WikiComponentProps) => {
  const { treasureChest } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    treasureChestData,
    treasureChest,
    'text',
  );
  const localizedItemsLocations = mapWithLocalization(
    locationsItemsData,
    treasureChest.locations,
    'text',
  );
  const localizedItemsChestContent = mapWithLocalization(
    chestContentItemsData,
    treasureChest.chestContent,
    'text',
  );
  return (
    <WikiLayout title={treasureChest.header} id={id} imgStyle={styles.image}>
      <Table list={localizedItemsLocations} />
      {renderItemCards(localizedItems)}
      <Table list={localizedItemsChestContent} />
    </WikiLayout>
  );
};
