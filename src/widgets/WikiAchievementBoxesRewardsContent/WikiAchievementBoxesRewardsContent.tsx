import styles from './WikiAchievementBoxesRewardsContent.module.css';
import { mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';
import { achievementBoxesRewardsData } from '@/shared/lib/constants/wiki/achievementBoxesRewardsData';

export const WikiAchievementBoxesRewardsContent = () => {
  const { achievementBoxesRewards } = useLocalizedData();
  const localizedItems = mapWithLocalization(achievementBoxesRewardsData, achievementBoxesRewards, 'text')
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{achievementBoxesRewards.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
    </div>
  );
}