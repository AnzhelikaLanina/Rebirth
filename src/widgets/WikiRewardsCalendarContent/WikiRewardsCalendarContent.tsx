import styles from './WikiRewardsCalendarContent.module.css';
import {
  mapWithLocalization,
  renderItemCards,
  rewardsCalendarData,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiRewardsCalendarContent = ({ id }: WikiComponentProps) => {
  const { rewardsCalendar } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    rewardsCalendarData,
    rewardsCalendar,
    'text'
  );
  return (
    <WikiLayout
      title={rewardsCalendar.header}
      id={id}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedItems)}
    </WikiLayout>
  );
}