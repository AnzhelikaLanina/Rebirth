import styles from './WikiWorldTradeContent.module.css';
import { useLocalizedData } from '@/shared/lib/hooks';
import { mapWithLocalization } from '@/shared/lib/utils/mapWithLocalization';
import { worldTradeData } from '@/shared/lib/constants/wiki/worldTradeData';

export const WikiWorldTradeContent = () => {
  const { worldTrade } = useLocalizedData();
  const localizedItems = mapWithLocalization(worldTradeData, worldTrade);

  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{worldTrade.header}</h3>
        <div className={styles.image} />
      </div>
      {localizedItems.map((item, index) => (
        <div className={styles.box} key={index}>
          <img className={styles.img} src={item.src} alt={item.alt} />
          <p className={styles.text}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
