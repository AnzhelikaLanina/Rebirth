import {
  bossExterminationData,
  bossExterminationTaskRewardsData,
  bossExterminationFinalBossRewardsData,
  bossExterminationChestRewardsData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiBossExterminationContent.module.css';

export const WikiBossExterminationContent = ({ id }: WikiComponentProps) => {
  const { bossExtermination } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    bossExterminationData,
    bossExtermination,
    'text',
  );
  const localizedTaskRewards = mapWithLocalization(
    bossExterminationTaskRewardsData,
    bossExtermination.taskRewards,
    'text',
  );
  const localizedFinalBossRewards = mapWithLocalization(
    bossExterminationFinalBossRewardsData,
    bossExtermination.finalBossRewards,
    'text',
  );
  const localizedChestRewards = mapWithLocalization(
    bossExterminationChestRewardsData,
    bossExtermination.chestRewards,
    'text',
  );

  return (
    <WikiLayout title={bossExtermination.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedItems)}
      <Table list={localizedTaskRewards} />
      <Table list={localizedFinalBossRewards} />
      <Table list={localizedChestRewards} />
    </WikiLayout>
  );
};
