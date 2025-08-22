import styles from './WikiNewUniqueTasksContent.module.css';
import { mapWithLocalization, renderItemCards, uniqueTasksData, useLocalizedData } from '@/shared/lib';

export const WikiNewUniqueTasksContent = () => {
  const { newUniqueTasks } = useLocalizedData();
  const localizedItems = mapWithLocalization(uniqueTasksData, newUniqueTasks, 'text')
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{newUniqueTasks.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
    </div>
  );
}