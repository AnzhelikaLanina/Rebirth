import styles from './WikiGuaranteedEnhancementContent.module.css';
import { mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';
import { guaranteedEnhancementData } from '@/shared/lib/constants/wiki/guaranteedEnhancementData';
import { WikiComponentProps } from '@/shared/types';

export const WikiGuaranteedEnhancementContent = ({ id }: WikiComponentProps) => {
  const { guaranteedEnhancement } = useLocalizedData();
  const localizedItems = mapWithLocalization(guaranteedEnhancementData,guaranteedEnhancement,'text');
  return (
    <div className={styles.content} id={id}>
      <div className={styles.info}>
        <h3 className={styles.header}>{guaranteedEnhancement.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
    </div>
  );
}