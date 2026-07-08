import styles from './WikiNormalCreationContent.module.css';
import { Table } from '@/widgets';
import {
  mapWithLocalization,
  normalCreationData,
  normalCreationItemsData,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiNormalCreationContent = ({ id }: WikiComponentProps) => {
  const { normalCreation } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    normalCreationData,
    normalCreation,
    'text',
  );

  const localizedItemsRewards = mapWithLocalization(
    normalCreationItemsData,
    normalCreation.rewards,
    'text',
  );

  return (
    <WikiLayout title={normalCreation.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedItems)}
      <Table list={localizedItemsRewards} />
    </WikiLayout>
  );
};
