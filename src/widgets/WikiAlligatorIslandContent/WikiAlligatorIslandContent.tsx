import {
  alligatorIslandListData,
  alligatorIslandRewardsData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiAlligatorIslandContent.module.css';

export const WikiAlligatorIslandContent = ({ id }: WikiComponentProps) => {
  const { alligatorIsland } = useLocalizedData();
  const localizedList = mapWithLocalization(
    alligatorIslandListData,
    alligatorIsland,
    'text',
  );
  const localizedRewards = mapWithLocalization(
    alligatorIslandRewardsData,
    alligatorIsland,
    'text',
  );

  return (
    <WikiLayout title={alligatorIsland.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedList)}
      <Table list={localizedRewards} />
    </WikiLayout>
  );
};
