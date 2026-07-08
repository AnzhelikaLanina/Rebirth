import {
  coreBossInfoData,
  coreBossRewardsData,
  coreBossProphecyIntroData,
  coreBossProphecyData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiCoreBossContent.module.css';

export const WikiCoreBossContent = ({ id }: WikiComponentProps) => {
  const { coreBoss } = useLocalizedData();
  const localizedInfo = mapWithLocalization(coreBossInfoData, coreBoss, 'text');
  const localizedRewards = mapWithLocalization(
    coreBossRewardsData,
    coreBoss,
    'text',
  );
  const localizedProphecyIntro = mapWithLocalization(
    coreBossProphecyIntroData,
    coreBoss,
    'text',
  );
  const localizedProphecy = mapWithLocalization(
    coreBossProphecyData,
    coreBoss,
    'text',
  );

  return (
    <WikiLayout title={coreBoss.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedInfo)}
      <Table list={localizedRewards} />
      {renderItemCards(localizedProphecyIntro)}
      <Table list={localizedProphecy} />
    </WikiLayout>
  );
};
