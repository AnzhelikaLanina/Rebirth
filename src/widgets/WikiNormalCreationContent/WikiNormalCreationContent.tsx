import styles from './WikiNormalCreationContent.module.css';
import { mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';
import { normalCreationData } from '@/shared/lib/constants/wiki/normalCreationData';
import { dragonPotionItemsData } from '@/shared/lib/constants/wiki/dragonPotionItemsData';
import { Table } from '@/widgets';
import { WikiComponentProps } from '@/shared/types';

export const WikiNormalCreationContent = ({ id }: WikiComponentProps) => {
  const { normalCreation } = useLocalizedData();
  const localizedItems = mapWithLocalization(normalCreationData, normalCreation, 'text');
  const localizedItemsLv1 = mapWithLocalization(dragonPotionItemsData, normalCreation.dragonPotionLvl1, 'text');
  const localizedItemsLv2 = mapWithLocalization(dragonPotionItemsData, normalCreation.dragonPotionLvl2, 'text');
  return (
    <div className={styles.content} id={id}>
      <div className={styles.info}>
        <h3 className={styles.header}>{normalCreation.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
      <Table list={localizedItemsLv1} />
      <Table list={localizedItemsLv2} />
    </div>
  );
}