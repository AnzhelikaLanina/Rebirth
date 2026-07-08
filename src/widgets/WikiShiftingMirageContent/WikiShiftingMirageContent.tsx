import { Fragment } from 'react';
import {
  shiftingMirageIntroData,
  shiftingMirageListData,
  shiftingMirageChestsData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiShiftingMirageContent.module.css';

export const WikiShiftingMirageContent = ({ id }: WikiComponentProps) => {
  const { shiftingMirage } = useLocalizedData();
  const localizedIntro = mapWithLocalization(
    shiftingMirageIntroData,
    shiftingMirage,
    'text',
  );
  const localizedList = mapWithLocalization(
    shiftingMirageListData,
    shiftingMirage,
    'text',
  );
  const localizedChests = mapWithLocalization(
    shiftingMirageChestsData,
    shiftingMirage,
    'text',
  );

  const stages = [
    { before: localizedList.slice(0, 3), after: localizedList.slice(3, 5) },
    { before: localizedList.slice(5, 8), after: localizedList.slice(8, 10) },
    { before: localizedList.slice(10, 13), after: localizedList.slice(13, 15) },
    { before: localizedList.slice(15, 18), after: localizedList.slice(18, 21) },
  ];

  return (
    <WikiLayout title={shiftingMirage.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedIntro)}
      {stages.map((stage, index) => (
        <Fragment key={index}>
          {renderItemCards(stage.before)}
          <Table list={[localizedChests[index]]} />
          {renderItemCards(stage.after)}
        </Fragment>
      ))}
    </WikiLayout>
  );
};
