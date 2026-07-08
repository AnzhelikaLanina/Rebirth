import styles from './WikiAchievementBoxesRewardsContent.module.css';
import {
  achievementBoxesRewardsData,
  achievementBoxesRewardsItemsData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';

export const WikiAchievementBoxesRewardsContent = ({
  id,
}: WikiComponentProps) => {
  const { achievementBoxesRewards } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    achievementBoxesRewardsData,
    achievementBoxesRewards,
    'text',
  );

  const localizedItemsRewards = mapWithLocalization(
    achievementBoxesRewardsItemsData,
    achievementBoxesRewards.rewards,
    'text',
  );

  return (
    <WikiLayout
      id={id}
      title={achievementBoxesRewards.header}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedItems)}
      <Table list={localizedItemsRewards} />
    </WikiLayout>
  );
};
