import styles from './WikiWorldTradeContent.module.css';
import {
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
  worldTradeData,
} from '@/shared';

export const WikiWorldTradeContent = ({ id }: WikiComponentProps) => {
  const { worldTrade } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    worldTradeData,
    worldTrade,
    'text',
  );
  return (
    <WikiLayout
      title={worldTrade.header}
      id={id}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedItems)}
    </WikiLayout>
  );
};
