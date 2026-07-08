import {
  zakenInfoData,
  zakenRewardsData,
  zakenProphecyIntroData,
  zakenProphecyData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiZakenContent.module.css';

export const WikiZakenContent = ({ id }: WikiComponentProps) => {
  const { zaken } = useLocalizedData();
  const localizedInfo = mapWithLocalization(zakenInfoData, zaken, 'text');
  const localizedRewards = mapWithLocalization(zakenRewardsData, zaken, 'text');
  const localizedProphecyIntro = mapWithLocalization(
    zakenProphecyIntroData,
    zaken,
    'text',
  );
  const localizedProphecy = mapWithLocalization(
    zakenProphecyData,
    zaken,
    'text',
  );

  return (
    <WikiLayout title={zaken.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedInfo)}
      <Table list={localizedRewards} />
      {renderItemCards(localizedProphecyIntro)}
      <Table list={localizedProphecy} />
    </WikiLayout>
  );
};
