import styles from './WikiQuestsContent.module.css';
import { mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';
import { questsData } from '@/shared/lib/constants/wiki/questsData';
import { WikiComponentProps } from '@/shared/types';

export const WikiQuestsContent = ({ id }: WikiComponentProps) => {
  const { quests } = useLocalizedData();
  const localizedItems = mapWithLocalization(questsData, quests, 'text')
  return (
    <div className={styles.content} id={id}>
      <div className={styles.info}>
        <h3 className={styles.header}>{quests.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
    </div>
  );
}