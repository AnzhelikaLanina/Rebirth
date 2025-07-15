import styles from './WikiGameAssistantContent.module.css';
import { Table } from '../Table';
import { useLocalizedData } from '@/shared/lib/hooks';
import { temporaryGameItemsData } from '@/shared/lib/constants/wiki/temporaryGameItemsData';
import { supportItemsData } from '@/shared/lib/constants/wiki/supportItemsData';
import { mapWithLocalization } from '@/shared/lib/utils/mapWithLocalization';

export const WikiGameAssistantContent = () => {
  const { support } = useLocalizedData();
  const localizedSupportList = mapWithLocalization(supportItemsData, support);

  const localizedTemporaryItems = mapWithLocalization(
    temporaryGameItemsData,
    support.temporaryItems,
  );

  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{support.header}</h3>
        <div className={styles.image} />
      </div>
      <Table list={localizedTemporaryItems} />
      {localizedSupportList.map((item, index) => (
        <div className={styles.box} key={index}>
          <img className={styles.img} src={item.src} alt={item.alt} />
          <p className={styles.text}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
