import styles from './WikiCostumesContent.module.css';
import { useLocalizedData } from '@/shared/lib/hooks';
import { mapWithLocalization } from '@/shared/lib/utils/mapWithLocalization';
import { costumesItemsData } from '@/shared/lib/constants/costumesItemsData';

export const WikiCostumesContent = () => {
  const { costumes } = useLocalizedData();
  const localizedCostumeList = mapWithLocalization(costumesItemsData, costumes);
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{costumes.header}</h3>
        <div className={styles.image} />
      </div>
      {localizedCostumeList.map((item, index) => (
        <div className={styles.box} key={index}>
          <img className={styles.img} src={item.src} alt={item.alt} />
          <p className={styles.text}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
