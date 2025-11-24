import styles from './WikiRewardsForTasksContent.module.css';
import { Table } from '../Table';
import {
  mapWithLocalization, renderItemCards, rewardsTasksData,
  systemRewardsData,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiRewardsForTasksContent = ({ id }: WikiComponentProps) => {
  const { rewardsForTasks } = useLocalizedData();
  const itemTop = mapWithLocalization(
    rewardsTasksData,
    rewardsForTasks,
    'text'
  );

  const itemsRewards = mapWithLocalization(
    systemRewardsData,
    rewardsForTasks.rewards,
    'text',
  );
  return (
    <WikiLayout title={rewardsForTasks.header} id={id} imgStyle={styles.image}>
      {renderItemCards(itemTop)}
      <Table list={itemsRewards} />
      <p className={styles.text}>{(rewardsForTasks.bonusForReading)}</p>
    </WikiLayout>
  );
};
