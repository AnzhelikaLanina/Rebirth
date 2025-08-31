import styles from './WikiAchievementBoxesRewardsContent.module.css';
import {
  achievementBoxesRewardsData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiAchievementBoxesRewardsContent = ({
  id,
}: WikiComponentProps) => {
  const { achievementBoxesRewards } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    achievementBoxesRewardsData,
    achievementBoxesRewards,
    'text',
  );
  return (
    <WikiLayout
      id={id}
      title={achievementBoxesRewards.header}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedItems)}
    </WikiLayout>
  );
};
