import styles from './WikiRewardsForTasksContent.module.css';
import { Table } from '../Table';
import {
  mapWithLocalization,
  systemRewardsData,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiRewardsForTasksContent = ({ id }: WikiComponentProps) => {
  const { rewardsForTasks } = useLocalizedData();
  const itemsRewards = mapWithLocalization(
    systemRewardsData,
    rewardsForTasks.rewards,
    'text',
  );
  return (
    <WikiLayout title={rewardsForTasks.header} id={id} imgStyle={styles.image}>
      <Table list={itemsRewards} />
    </WikiLayout>
  );
};
