import {
  letterCollectorIntroData,
  letterCollectorListData,
  letterCollectorLineageData,
  letterCollectorGrankainData,
  letterCollectorAdenData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiLetterCollectorContent.module.css';

export const WikiLetterCollectorContent = ({ id }: WikiComponentProps) => {
  const { letterCollector } = useLocalizedData();
  const localizedIntro = mapWithLocalization(
    letterCollectorIntroData,
    letterCollector,
    'text',
  );
  const localizedList = mapWithLocalization(
    letterCollectorListData,
    letterCollector,
    'text',
  );
  const localizedLineage = mapWithLocalization(
    letterCollectorLineageData,
    letterCollector.lineage,
    'text',
  );
  const localizedGrankain = mapWithLocalization(
    letterCollectorGrankainData,
    letterCollector.grankain,
    'text',
  );
  const localizedAden = mapWithLocalization(
    letterCollectorAdenData,
    letterCollector.aden,
    'text',
  );

  return (
    <WikiLayout title={letterCollector.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedIntro)}
      {renderItemCards(localizedList)}
      <Table list={localizedLineage} />
      <Table list={localizedGrankain} />
      <Table list={localizedAden} />
    </WikiLayout>
  );
};
