import {
  ironSupplyBaseData,
  ironSupplyBaseStormingTitleData,
  ironSupplyBaseStormingQuestData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiIronSupplyBaseContent.module.css';

export const WikiIronSupplyBaseContent = ({ id }: WikiComponentProps) => {
  const { ironSupplyBase } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    ironSupplyBaseData,
    ironSupplyBase,
    'text',
  );
  const localizedStormingTitle = mapWithLocalization(
    ironSupplyBaseStormingTitleData,
    ironSupplyBase.stormingQuest,
    'text',
  );
  const localizedStormingQuest = mapWithLocalization(
    ironSupplyBaseStormingQuestData,
    ironSupplyBase.stormingQuest,
    'text',
  );

  return (
    <WikiLayout title={ironSupplyBase.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedItems)}
      {renderItemCards(localizedStormingTitle)}
      <Table list={localizedStormingQuest} />
    </WikiLayout>
  );
};
