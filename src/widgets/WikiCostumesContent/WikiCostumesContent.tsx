import styles from './WikiCostumesContent.module.css';
import { costumesData, useLocalizedData, mapWithLocalization, renderItemCards } from '@/shared/lib';

export const WikiCostumesContent = () => {
  const { costumes } = useLocalizedData();
  const localizedCostumeList = mapWithLocalization(
    costumesData,
    costumes,
    'text',
  );
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{costumes.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedCostumeList)}
    </div>
  );
};
