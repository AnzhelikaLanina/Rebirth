import {
  valakasData,
  valakasSuppliesData,
  valakasRewardsData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiValakasContent.module.css';

export const WikiValakasContent = ({ id }: WikiComponentProps) => {
  const { valakas, wiki } = useLocalizedData();

  const localizedItems = mapWithLocalization(
    valakasData,
    valakas,
    'text',
  );
  const localizedSupplies = mapWithLocalization(
    valakasSuppliesData,
    valakas.supplies,
    'text',
  );
  const localizedRewards = mapWithLocalization(
    valakasRewardsData,
    valakas.rewards,
    'text',
  );

  const itemsBeforeSupplies = localizedItems.slice(0, 12);
  const commandChannel = localizedItems.slice(13, 14);
  const rewardsTitles = localizedItems.slice(14, 16);
  const itemsAfterRewards = localizedItems.slice(16);

  return (
    <WikiLayout title={wiki.valakasHeader} id={id} imgStyle={styles.image}>
      {renderItemCards(itemsBeforeSupplies)}
      <Table list={localizedSupplies} />
      {renderItemCards(commandChannel)}
      {renderItemCards(rewardsTitles)}
      <Table list={localizedRewards} />
      {renderItemCards(itemsAfterRewards)}
    </WikiLayout>
  );
};
