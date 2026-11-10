import {
  octavisData,
  octavisStageOneData,
  octavisStageTwoData,
  octavisStageThreeData,
  octavisQuestData,
  octavisVictoryRewardData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiOctavisContent.module.css';

export const WikiOctavisContent = ({ id }: WikiComponentProps) => {
  const { octavis, wiki } = useLocalizedData();

  const localizedIntro = mapWithLocalization(octavisData, octavis, 'text');
  const localizedStageOne = mapWithLocalization(
    octavisStageOneData,
    octavis.stageOne,
    'text',
  );
  const localizedStageTwo = mapWithLocalization(
    octavisStageTwoData,
    octavis.stageTwo,
    'text',
  );
  const localizedStageThree = mapWithLocalization(
    octavisStageThreeData,
    octavis.stageThree,
    'text',
  );
  const localizedQuest = mapWithLocalization(
    octavisQuestData,
    octavis.quest,
    'text',
  );
  const localizedVictoryReward = mapWithLocalization(
    octavisVictoryRewardData,
    octavis.victoryReward,
    'text',
  );

  return (
    <WikiLayout title={wiki.octavisHeader} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedIntro)}
      <Table list={localizedStageOne} />
      <Table list={localizedStageTwo} />
      <Table list={localizedStageThree} />
      <Table list={localizedQuest} />
      <Table list={localizedVictoryReward} />
    </WikiLayout>
  );
};
