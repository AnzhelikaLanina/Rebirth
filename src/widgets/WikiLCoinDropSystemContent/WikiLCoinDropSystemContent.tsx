import styles from './WikiLCoinDropSystemContent.module.css';
import { mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';
import { lCoinDropSystemData } from '@/shared/lib/constants/wiki/lCoinDropSystemData';
import { WikiComponentProps } from '@/shared/types';

export const WikiLCoinDropSystemContent = ({ id }: WikiComponentProps) => {
  const { lCoinDropSystem } = useLocalizedData();
  const localizedItems = mapWithLocalization(lCoinDropSystemData, lCoinDropSystem, 'text');
  return (
    <div className={styles.content} id={id}>
      <div className={styles.info}>
        <h3 className={styles.header}>{lCoinDropSystem.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
    </div>
  )
}