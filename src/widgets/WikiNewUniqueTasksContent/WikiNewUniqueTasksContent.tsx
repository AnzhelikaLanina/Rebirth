import styles from './WikiNewUniqueTasksContent.module.css';
import {
  mapWithLocalization,
  renderItemCards,
  uniqueTasksData,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiNewUniqueTasksContent = ({ id }: WikiComponentProps) => {
  const { newUniqueTasks } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    uniqueTasksData,
    newUniqueTasks,
    'text'
  );
  return (
    <WikiLayout
      title={newUniqueTasks.header}
      id={id}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedItems)}
    </WikiLayout>
  );
}