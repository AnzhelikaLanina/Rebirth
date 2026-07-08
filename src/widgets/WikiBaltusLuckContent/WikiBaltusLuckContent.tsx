import {
  baltusLuckIntroData,
  baltusLuckGrandPrizeData,
  baltusLuckSibiCoinsData,
  baltusLuckDropTimeData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiBaltusLuckContent.module.css';

export const WikiBaltusLuckContent = ({ id }: WikiComponentProps) => {
  const { baltusLuck } = useLocalizedData();
  const localizedIntro = mapWithLocalization(
    baltusLuckIntroData,
    baltusLuck,
    'text',
  );
  const localizedGrandPrize = mapWithLocalization(
    baltusLuckGrandPrizeData,
    baltusLuck.grandPrize,
    'text',
  );
  const localizedSibiCoins = mapWithLocalization(
    baltusLuckSibiCoinsData,
    baltusLuck.sibiCoins,
    'text',
  );
  const localizedDropTime = mapWithLocalization(
    baltusLuckDropTimeData,
    baltusLuck.dropTime,
    'text',
  );

  return (
    <WikiLayout title={baltusLuck.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedIntro)}
      {renderItemCards(localizedGrandPrize)}
      {renderItemCards(localizedSibiCoins)}
      <Table list={localizedDropTime} />
    </WikiLayout>
  );
};
