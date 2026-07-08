import {
  contestForestData,
  contestForestCannotEnterData,
  contestForestMonsterPointsData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table, TwoColumnTable } from '@/widgets';
import styles from './WikiContestForestContent.module.css';

export const WikiContestForestContent = ({ id }: WikiComponentProps) => {
  const { contestForest } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    contestForestData,
    contestForest,
    'text',
  );
  const localizedCannotEnter = mapWithLocalization(
    contestForestCannotEnterData,
    contestForest.cannotEnter,
    'text',
  );

  const monsterPointsTableData = contestForestMonsterPointsData.map(
    (row) => ({
      left: contestForest.monsterPoints[row.leftKey],
      right: contestForest.monsterPoints[row.rightKey],
      image: row.image,
      src: row.src,
      alt: row.alt,
    }),
  );

  const itemsBeforeTeleport = localizedItems.slice(0, 13);
  const itemsAfterTeleportBeforePointsTable = localizedItems.slice(13, 18);
  const itemsAfterPointsTable = localizedItems.slice(18);

  return (
    <WikiLayout title={contestForest.header} id={id} imgStyle={styles.image}>
      {renderItemCards(itemsBeforeTeleport)}
      <Table list={localizedCannotEnter} />
      {renderItemCards(itemsAfterTeleportBeforePointsTable)}
      <TwoColumnTable
        header={{
          left: contestForest.monsterPoints.title,
          right: contestForest.monsterPoints.points,
        }}
        items={monsterPointsTableData}
      />
      {renderItemCards(itemsAfterPointsTable)}
    </WikiLayout>
  );
};
