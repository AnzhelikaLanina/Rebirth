import styles from './WikiOlympiadContent.module.css';
import { Table } from '@/widgets';
import {
  mapWithLocalization,
  olympiadData,
  olympiadScheduleData,
  olympiadHeroConditionsData,
  olympiadParticipationRewardsData,
  olympiadTasksForWinData,
  olympiadTaskRewardsData,
  olympiadShopItemsData,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiOlympiadContent = ({ id }: WikiComponentProps) => {
  const { olympiad } = useLocalizedData();
  const localizedItems = mapWithLocalization(olympiadData, olympiad, 'text');
  const localizedSchedule = mapWithLocalization(
    olympiadScheduleData,
    olympiad.schedule,
    'text',
  );
  const localizedHeroConditions = mapWithLocalization(
    olympiadHeroConditionsData,
    olympiad.heroConditions,
    'text',
  );
  const localizedParticipationRewards = mapWithLocalization(
    olympiadParticipationRewardsData,
    olympiad.participationRewards,
    'text',
  );
  const localizedTasksForWin = mapWithLocalization(
    olympiadTasksForWinData,
    olympiad.tasksForWin,
    'text',
  );
  const localizedTaskRewards = mapWithLocalization(
    olympiadTaskRewardsData,
    olympiad.taskRewards,
    'text',
  );
  const localizedShopItems = mapWithLocalization(
    olympiadShopItemsData,
    olympiad.olympiadShopItems,
    'text',
  );
  return (
    <WikiLayout title={olympiad.header} id={id} imgStyle={styles.image}>
      <Table list={localizedSchedule} />
      {renderItemCards(localizedItems.slice(0, 2))}
      <Table list={localizedHeroConditions} />
      {renderItemCards(localizedItems.slice(2))}
      <Table list={localizedParticipationRewards} />
      <Table list={localizedTasksForWin} />
      <Table list={localizedTaskRewards} />
      <Table list={localizedShopItems} />
    </WikiLayout>
  );
};
