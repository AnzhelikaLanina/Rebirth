import styles from './WikiRewardsCalendarContent.module.css';
import { mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';
import { rewardsCalendarData } from '@/shared/lib/constants/wiki/rewardsCalendarData';
import { WikiComponentProps } from '@/shared/types';

export const WikiRewardsCalendarContent = ({ id }: WikiComponentProps) => {
  const { rewardsCalendar } = useLocalizedData();
  const localizedItems = mapWithLocalization(rewardsCalendarData, rewardsCalendar, 'text')
  return (
    <div className={styles.content} id={id}>
      <div className={styles.info}>
        <h3 className={styles.header}>{rewardsCalendar.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
    </div>
  );
}