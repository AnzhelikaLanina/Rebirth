import styles from './WikiRewardsForTasksContent.module.css';
import bmlcoin from '../../shared/assets/images/items/bm-lcoin.png';
import { Table } from '../Table';
import { useLocalizedData } from '@/shared/lib/hooks';
import { mapWithLocalization } from '@/shared/lib/utils/mapWithLocalization';
import { systemRewards } from '@/shared/lib/constants/systemRewards';
import { uniqueTasks } from '@/shared/lib/constants/uniqueTasks';

export const WikiRewardsForTasksContent = () => {
  const { rewardsForTasks } = useLocalizedData();
  const itemsRewards = mapWithLocalization(systemRewards, rewardsForTasks.systemRewards);
  const itemsTasks = mapWithLocalization(uniqueTasks, rewardsForTasks.uniqueTasks);

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
