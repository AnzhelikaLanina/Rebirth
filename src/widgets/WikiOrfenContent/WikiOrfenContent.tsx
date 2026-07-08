import {
  orfenInfoData,
  orfenRewardsData,
  orfenProphecyIntroData,
  orfenProphecyData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiOrfenContent.module.css';

export const WikiOrfenContent = ({ id }: WikiComponentProps) => {
  const { orfen } = useLocalizedData();
  const localizedInfo = mapWithLocalization(orfenInfoData, orfen, 'text');
  const localizedRewards = mapWithLocalization(orfenRewardsData, orfen, 'text');
  const localizedProphecyIntro = mapWithLocalization(
    orfenProphecyIntroData,
    orfen,
    'text',
  );
  const localizedProphecy = mapWithLocalization(
    orfenProphecyData,
    orfen,
    'text',
  );

  return (
    <WikiLayout title={orfen.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedInfo)}
      <Table list={localizedRewards} />
      {renderItemCards(localizedProphecyIntro)}
      <Table list={localizedProphecy} />
    </WikiLayout>
  );
};
