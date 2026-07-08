import styles from './WikiRewardsCalendarContent.module.css';
import {
  mapWithLocalization,
  renderItemCards,
  rewardsCalendarData,
  rewardsCalendarItemsData,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';

export const WikiRewardsCalendarContent = ({ id }: WikiComponentProps) => {
  const { rewardsCalendar } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    rewardsCalendarData,
    rewardsCalendar,
    'text',
  );

  const localizedItemsRewards = mapWithLocalization(
    rewardsCalendarItemsData,
    rewardsCalendar.rewards,
    'text',
  );

  return (
    <WikiLayout title={rewardsCalendar.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedItems.slice(0, 1))}
      <Table list={localizedItemsRewards} />
      {renderItemCards(localizedItems.slice(1))}
    </WikiLayout>
  );
};
