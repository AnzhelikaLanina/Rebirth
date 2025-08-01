import styles from './WikiGameAssistantContent.module.css';
import {
  temporaryGameItemsData,
  supportItemsData,
  useLocalizedData,
  mapWithLocalization
} from '@/shared/lib';
import { TableItemProps } from '@/shared/types';
import { Table } from '../Table';

export const WikiGameAssistantContent = () => {
  const { support } = useLocalizedData();
  const localizedSupportList = mapWithLocalization(
    supportItemsData,
    support,
    'text',
  );

  const localizedTemporaryItems = mapWithLocalization(
    temporaryGameItemsData,
    support.temporaryItems,
    'text',
  );
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{support.header}</h3>
        <div className={styles.image} />
      </div>
      <Table list={localizedTemporaryItems} />
      {localizedSupportList.map((item: TableItemProps, index: number) => (
        <div className={styles.box} key={index}>
          <img className={styles.img} src={item.src} alt={item.alt} />
          <p className={styles.text}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
