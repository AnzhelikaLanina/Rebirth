import {
  catacombData,
  catacombQuestRewardsData,
  catacombSpecialCreationData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiCatacombContent.module.css';

export const WikiCatacombContent = ({ id }: WikiComponentProps) => {
  const { catacomb } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    catacombData,
    catacomb,
    'text',
  );
  const localizedQuestRewards = mapWithLocalization(
    catacombQuestRewardsData,
    catacomb.questRewards,
    'text',
  );
  const localizedSpecialCreation = mapWithLocalization(
    catacombSpecialCreationData,
    catacomb.specialCreation,
    'text',
  );

  return (
    <WikiLayout title={catacomb.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedItems)}
      <Table list={localizedQuestRewards} />
      <Table list={localizedSpecialCreation} />
    </WikiLayout>
  );
};
