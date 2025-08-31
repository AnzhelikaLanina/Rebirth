import styles from './WikiNormalCreationContent.module.css';
import { Table } from '@/widgets';
import {
  dragonPotionItemsData,
  mapWithLocalization,
  normalCreationData,
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
  const localizedItemsLv1 = mapWithLocalization(
    dragonPotionItemsData,
    normalCreation.dragonPotionLvl1,
    'text',
  );
  const localizedItemsLv2 = mapWithLocalization(
    dragonPotionItemsData,
    normalCreation.dragonPotionLvl2,
    'text',
  );
  return (
    <WikiLayout title={normalCreation.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedItems)}
      <Table list={localizedItemsLv1} />
      <Table list={localizedItemsLv2} />
    </WikiLayout>
  );
};
