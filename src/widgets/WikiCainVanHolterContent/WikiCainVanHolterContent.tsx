import {
  cainVanHolterData,
  cainVanHolterMechanicsData,
  cainVanHolterQuestData,
  cainVanHolterVictoryRewardData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiCainVanHolterContent.module.css';

export const WikiCainVanHolterContent = ({ id }: WikiComponentProps) => {
  const { cainVanHolter, wiki } = useLocalizedData();

  const localizedIntro = mapWithLocalization(
    cainVanHolterData,
    cainVanHolter,
    'text',
  );
  const localizedMechanics = mapWithLocalization(
    cainVanHolterMechanicsData,
    cainVanHolter,
    'text',
  );
  const localizedQuest = mapWithLocalization(
    cainVanHolterQuestData,
    cainVanHolter.quest,
    'text',
  );
  const localizedVictoryReward = mapWithLocalization(
    cainVanHolterVictoryRewardData,
    cainVanHolter.victoryReward,
    'text',
  );

  return (
    <WikiLayout title={wiki.cainVanHolterHeader} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedIntro)}
      {renderItemCards(localizedMechanics)}
      <Table list={localizedQuest} />
      <Table list={localizedVictoryReward} />
    </WikiLayout>
  );
};
