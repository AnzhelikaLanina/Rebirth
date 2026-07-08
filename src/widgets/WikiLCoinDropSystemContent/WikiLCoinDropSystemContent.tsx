import styles from './WikiLCoinDropSystemContent.module.css';
import {
  lCoinDropSystemData,
  lCoinAmountByPremiumData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';

export const WikiLCoinDropSystemContent = ({ id }: WikiComponentProps) => {
  const { lCoinDropSystem } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    lCoinDropSystemData,
    lCoinDropSystem,
    'text',
  );
  const localizedPremiumAmounts = mapWithLocalization(
    lCoinAmountByPremiumData,
    lCoinDropSystem.lcoinAmountByPremium,
    'text',
  );
  return (
    <WikiLayout id={id} title={lCoinDropSystem.header} imgStyle={styles.image}>
      {renderItemCards(localizedItems)}
      <Table list={localizedPremiumAmounts} />
    </WikiLayout>
  );
};
