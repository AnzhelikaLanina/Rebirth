import styles from './WikiQuestsContent.module.css';
import { mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';
import { questsData } from '@/shared/lib/constants/wiki/questsData';

export const WikiQuestsContent = () => {
  const { quests } = useLocalizedData();
  const localizedItems = mapWithLocalization(questsData, quests, 'text')
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{quests.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
    </div>
  );
}