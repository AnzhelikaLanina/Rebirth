import styles from './WikiWorldTradeContent.module.css';
import {
  worldTradeData,
  useLocalizedData,
  mapWithLocalization, renderItemCards,
} from '@/shared/lib';

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
      {renderItemCards(localizedItems)}
    </div>
  );
};
