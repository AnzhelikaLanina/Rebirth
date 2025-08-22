import styles from './WikiRewardsForTasksContent.module.css';
import {
  systemRewardsData,
  useLocalizedData,
  mapWithLocalization
} from '@/shared/lib';
import { Table } from '../Table';

export const WikiRewardsForTasksContent = () => {
  const { rewardsForTasks } = useLocalizedData();
  const itemsRewards = mapWithLocalization(
    systemRewardsData,
    rewardsForTasks.rewards,
    'text',
  );
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{rewardsForTasks.header}</h3>
        <div className={styles.image} />
      </div>
      <Table list={itemsRewards} />
    </div>
  );
};
