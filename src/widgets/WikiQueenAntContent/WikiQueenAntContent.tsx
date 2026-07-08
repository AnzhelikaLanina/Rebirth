import {
  queenAntInfoData,
  queenAntRewardsData,
  queenAntProphecyIntroData,
  queenAntProphecyData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiQueenAntContent.module.css';

export const WikiQueenAntContent = ({ id }: WikiComponentProps) => {
  const { queenAnt } = useLocalizedData();
  const localizedInfo = mapWithLocalization(queenAntInfoData, queenAnt, 'text');
  const localizedRewards = mapWithLocalization(
    queenAntRewardsData,
    queenAnt,
    'text',
  );
  const localizedProphecyIntro = mapWithLocalization(
    queenAntProphecyIntroData,
    queenAnt,
    'text',
  );
  const localizedProphecy = mapWithLocalization(
    queenAntProphecyData,
    queenAnt,
    'text',
  );

  return (
    <WikiLayout title={queenAnt.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedInfo)}
      <Table list={localizedRewards} />
      {renderItemCards(localizedProphecyIntro)}
      <Table list={localizedProphecy} />
    </WikiLayout>
  );
};
