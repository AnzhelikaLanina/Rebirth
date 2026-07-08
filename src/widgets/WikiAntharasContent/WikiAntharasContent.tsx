import {
  antharasData,
  antharasRewardsData,
  antharasBlessingData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiAntharasContent.module.css';

export const WikiAntharasContent = ({ id }: WikiComponentProps) => {
  const { antharas, wiki } = useLocalizedData();

  const localizedItems = mapWithLocalization(
    antharasData,
    antharas,
    'text',
  );
  const localizedRewards = mapWithLocalization(
    antharasRewardsData,
    antharas.rewards,
    'text',
  );
  const localizedBlessingBonuses = mapWithLocalization(
    antharasBlessingData,
    antharas.blessingBonuses,
    'text',
  );

  const itemsBeforeRewards = localizedItems.slice(0, 7);
  const rewardsTitle2 = localizedItems.slice(7, 8);
  const itemsAfterRewards = localizedItems.slice(8);

  return (
    <WikiLayout title={wiki.antharasHeader} id={id} imgStyle={styles.image}>
      {renderItemCards(itemsBeforeRewards)}
      {renderItemCards(rewardsTitle2)}
      <Table list={localizedRewards} />
      {renderItemCards(itemsAfterRewards)}
      <Table list={localizedBlessingBonuses} />
    </WikiLayout>
  );
};
