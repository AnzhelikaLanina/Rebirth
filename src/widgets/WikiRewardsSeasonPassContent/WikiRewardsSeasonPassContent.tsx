import styles from './WikiRewardsSeasonPassContent.module.css';
import { mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';
import { rewardsSeasonPassData } from '@/shared/lib/constants/wiki/rewardsSeasonPassData';

export const WikiRewardsSeasonPassContent = () => {
  const { rewardsSeasonPass } = useLocalizedData();
  const localizedItems = mapWithLocalization(rewardsSeasonPassData, rewardsSeasonPass, 'text');
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{rewardsSeasonPass.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
    </div>
  );
}