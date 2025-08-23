import styles from './WikiOlympiadContent.module.css';
import { mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';
import { olympiadData } from '@/shared/lib/constants/wiki/olympiadData';
import { WikiComponentProps } from '@/shared/types';

export const WikiOlympiadContent = ({ id }: WikiComponentProps) => {
  const { olympiad } = useLocalizedData();
  const localizedItems = mapWithLocalization(olympiadData, olympiad, 'text');
  return (
    <div className={styles.content} id={id}>
      <div className={styles.info}>
        <h3 className={styles.header}>{olympiad.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
    </div>
  )
}