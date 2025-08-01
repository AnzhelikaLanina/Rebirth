import styles from './WikiRewardsForTasksContent.module.css';
import {
  systemRewards,
  uniqueTasks,
  useLocalizedData,
  mapWithLocalization
} from '@/shared/lib';
import { Table } from '../Table';
import bmlcoin from '../../shared/assets/images/items/bm-lcoin.png';

export const WikiRewardsForTasksContent = () => {
  const { rewardsForTasks } = useLocalizedData();
  const itemsRewards = mapWithLocalization(
    systemRewards,
    rewardsForTasks.systemRewards,
    'text',
  );
  const itemsTasks = mapWithLocalization(
    uniqueTasks,
    rewardsForTasks.uniqueTasks,
    'text',
  );
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{rewardsForTasks.header}</h3>
        <div className={styles.image} />
      </div>
      <Table list={itemsRewards} />
      <Table list={itemsTasks} />
      <div className={styles.box}>
        <img className={styles.img} src={bmlcoin} alt="bm lcoin" />
        <p className={styles.text}>{rewardsForTasks.buyAllLevels}</p>
      </div>
    </div>
  );
};
