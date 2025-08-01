import styles from './WikiCostumesContent.module.css';
import { costumesItemsData, useLocalizedData, mapWithLocalization } from '@/shared/lib';
import { TableItemProps } from '@/shared/types';

export const WikiCostumesContent = () => {
  const { costumes } = useLocalizedData();
  const localizedCostumeList = mapWithLocalization(
    costumesItemsData,
    costumes,
    'text',
  );
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{costumes.header}</h3>
        <div className={styles.image} />
      </div>
      {localizedCostumeList.map((item: TableItemProps, index: number) => (
        <div className={styles.box} key={index}>
          <img className={styles.img} src={item.src} alt={item.alt} />
          <p className={styles.text}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
