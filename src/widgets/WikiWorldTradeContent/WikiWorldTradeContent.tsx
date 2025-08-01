import styles from './WikiWorldTradeContent.module.css';
import {
  worldTradeData,
  useLocalizedData,
  mapWithLocalization
} from '@/shared/lib';
import { TableItemProps } from '@/shared/types';

export const WikiWorldTradeContent = () => {
  const { worldTrade } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    worldTradeData,
    worldTrade,
    'text',
  );
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{worldTrade.header}</h3>
        <div className={styles.image} />
      </div>
      {localizedItems.map((item: TableItemProps, index: number) => (
        <div className={styles.box} key={index}>
          <img className={styles.img} src={item.src} alt={item.alt} />
          <p className={styles.text}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
