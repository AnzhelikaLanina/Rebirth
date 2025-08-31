import styles from './WikiQuestsContent.module.css';
import {
  mapWithLocalization,
  questsData,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiQuestsContent = ({ id }: WikiComponentProps) => {
  const { quests } = useLocalizedData();
  const localizedItems = mapWithLocalization(questsData, quests, 'text');
  return (
    <WikiLayout title={quests.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedItems)}
    </WikiLayout>
  );
};
