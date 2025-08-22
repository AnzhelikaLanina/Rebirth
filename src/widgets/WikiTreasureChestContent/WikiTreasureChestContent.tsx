import styles from './WikiTreasureChestContent.module.css';
import { mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';
import { Table } from '@/widgets';
import { treasureChestData } from '@/shared/lib/constants/wiki/treasureChestData';
import { locationsItemsData } from '@/shared/lib/constants/wiki/locationsItemsData';
import { chestContentItemsData } from '@/shared/lib/constants/wiki/chestContentItemsData';

export const WikiTreasureChestContent = () => {
  const { treasureChest } = useLocalizedData();
  const localizedItems = mapWithLocalization(treasureChestData, treasureChest, 'text');
  const localizedItemsLocations = mapWithLocalization(locationsItemsData, treasureChest.locations, 'text');
  const localizedItemsChestContent = mapWithLocalization(chestContentItemsData, treasureChest.chestContent, 'text');
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{treasureChest.header}</h3>
        <div className={styles.image} />
      </div>
      <Table list={localizedItemsLocations} />
      {renderItemCards(localizedItems)}
      <Table list={localizedItemsChestContent} />
    </div>
  )
}