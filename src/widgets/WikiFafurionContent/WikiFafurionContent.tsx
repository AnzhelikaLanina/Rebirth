import {
  fafurionData,
  fafurionRewardsData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiFafurionContent.module.css';

export const WikiFafurionContent = ({ id }: WikiComponentProps) => {
  const { fafurion, wiki } = useLocalizedData();

  const localizedItems = mapWithLocalization(
    fafurionData,
    fafurion,
    'text',
  );
  const localizedRewards = mapWithLocalization(
    fafurionRewardsData,
    fafurion.rewards,
    'text',
  );

  const itemsBeforeRewards = localizedItems.slice(0, 9);
  const rewardsTitle2 = localizedItems.slice(9, 10);
  const itemsAfterRewards = localizedItems.slice(10);

  return (
    <WikiLayout title={wiki.fafurionHeader} id={id} imgStyle={styles.image}>
      {renderItemCards(itemsBeforeRewards)}
      {renderItemCards(rewardsTitle2)}
      <Table list={localizedRewards} />
      {renderItemCards(itemsAfterRewards)}
    </WikiLayout>
  );
};
