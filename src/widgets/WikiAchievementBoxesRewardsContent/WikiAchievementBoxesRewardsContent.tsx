import styles from './WikiAchievementBoxesRewardsContent.module.css';
import { mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';
import { achievementBoxesRewardsData } from '@/shared/lib/constants/wiki/achievementBoxesRewardsData';
import { WikiComponentProps } from '@/shared/types';

export const WikiAchievementBoxesRewardsContent = ({ id }: WikiComponentProps) => {
  const { achievementBoxesRewards } = useLocalizedData();
  const localizedItems = mapWithLocalization(achievementBoxesRewardsData, achievementBoxesRewards, 'text')
  return (
    <div className={styles.content} id={id}>
      <div className={styles.info}>
        <h3 className={styles.header}>{achievementBoxesRewards.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
    </div>
  );
}