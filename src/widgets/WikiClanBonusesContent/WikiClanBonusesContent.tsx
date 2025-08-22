import styles from './WikiClanBonusesContent.module.css';
import { mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';
import { clanBonusesData } from '@/shared/lib/constants/wiki/clanBonusesData';

export const WikiClanBonusesContent = () => {
  const { clanBonuses } = useLocalizedData();
  const localizedItems = mapWithLocalization(clanBonusesData, clanBonuses, 'text');
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{clanBonuses.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
    </div>
  )
}