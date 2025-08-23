import styles from './WikiWorldTradeContent.module.css';
import {
  worldTradeData,
  useLocalizedData,
  mapWithLocalization, renderItemCards,
} from '@/shared/lib';
import { WikiComponentProps } from '@/shared/types';

export const WikiWorldTradeContent = ({ id }: WikiComponentProps) => {
  const { worldTrade } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    worldTradeData,
    worldTrade,
    'text',
  );
  return (
    <div className={styles.content} id={id}>
      <div className={styles.info}>
        <h3 className={styles.header}>{worldTrade.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
    </div>
  );
};
