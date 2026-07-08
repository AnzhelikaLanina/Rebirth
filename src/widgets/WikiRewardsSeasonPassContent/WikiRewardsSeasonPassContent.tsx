import styles from './WikiRewardsSeasonPassContent.module.css';
import {
  mapWithLocalization,
  renderItemCards,
  rewardsSeasonPassData,
  rewardsSeasonPassItemsData,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';

export const WikiRewardsSeasonPassContent = ({ id }: WikiComponentProps) => {
  const { rewardsSeasonPass } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    rewardsSeasonPassData,
    rewardsSeasonPass,
    'text',
  );

  const localizedItemsRewards = mapWithLocalization(
    rewardsSeasonPassItemsData,
    rewardsSeasonPass.rewards,
    'text',
  );
  return (
    <WikiLayout
      title={rewardsSeasonPass.header}
      id={id}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedItems)}
      <Table list={localizedItemsRewards} />
    </WikiLayout>
  );
};
