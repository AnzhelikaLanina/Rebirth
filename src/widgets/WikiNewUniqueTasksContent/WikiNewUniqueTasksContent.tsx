import styles from './WikiNewUniqueTasksContent.module.css';
import {
  coreEmeraldRewardsData,
  mapWithLocalization,
  pirateKingRewardsData,
  renderItemCards,
  uniqueTasksData,
  manyArmsRewardsData,
  centipedeRewardsData,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout, cursedEmperorRewardsData, phantomBattlesRewardsData,
} from '@/shared';
import { Table } from '@/widgets';

export const WikiNewUniqueTasksContent = ({ id }: WikiComponentProps) => {
  const { newUniqueTasks } = useLocalizedData();
  const taskSlices = {
    top: [0, 2],
    pirate: [2, 3],
    manyArms: [3, 4],
    centipede: [4, 5],
    emperor: [5, 6],
    phantomBattles: [6, 7],
  };

  const localizedItems = Object.fromEntries(
    Object.entries(taskSlices).map(([key, [start, end]]) => [
      key,
      mapWithLocalization(
        uniqueTasksData.slice(start, end),
        newUniqueTasks,
        'text',
      ),
    ])
  );

  const localizedCoreEmeraldRewards = mapWithLocalization(
    coreEmeraldRewardsData,
    newUniqueTasks.coreEmeraldRewards,
    'text',
  );

  const localizedPirateKingRewards = mapWithLocalization(
    pirateKingRewardsData,
    newUniqueTasks.pirateKingRewards,
    'text',
  );

  const localizedManyArmsRewards = mapWithLocalization(
    manyArmsRewardsData,
    newUniqueTasks.manyArmsRewards,
    'text',
  );

  const localizedCentipedeRewards = mapWithLocalization(
    centipedeRewardsData,
    newUniqueTasks.centipedeRewards,
    'text',
  );

  const localizedCursedEmperorRewards = mapWithLocalization(
    cursedEmperorRewardsData,
    newUniqueTasks.cursedEmperorRewards,
    'text',
  );

  const localizedPhantomBattlesRewards = mapWithLocalization(
    phantomBattlesRewardsData,
    newUniqueTasks.phantomBattlesRewards,
    'text',
  );

  return (
    <WikiLayout title={newUniqueTasks.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedItems.top)}
      <Table list={localizedCoreEmeraldRewards} />
      {renderItemCards(localizedItems.pirate)}
      <Table list={localizedPirateKingRewards} />
      {renderItemCards(localizedItems.manyArms)}
      <Table list={localizedManyArmsRewards} />
      {renderItemCards(localizedItems.centipede)}
      <Table list={localizedCentipedeRewards} />
      {renderItemCards(localizedItems.emperor)}
      <Table list={localizedCursedEmperorRewards} />
      {renderItemCards(localizedItems.phantomBattles)}
      <Table list={localizedPhantomBattlesRewards} />
    </WikiLayout>
  );
};
