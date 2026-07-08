import {
  transcendentZoneIntroData,
  transcendentZoneStage1Data,
  transcendentZoneStage2Data,
  transcendentZoneStage3Data,
  transcendentZoneDifficultyData,
  transcendentZoneQuestData,
  transcendentZoneRewardsData,
  transcendentZoneOutroData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiTranscendentZoneContent.module.css';

export const WikiTranscendentZoneContent = ({ id }: WikiComponentProps) => {
  const { transcendentZone, wiki } = useLocalizedData();

  const localizedIntro = mapWithLocalization(
    transcendentZoneIntroData,
    transcendentZone,
    'text',
  );
  const localizedStage1 = mapWithLocalization(
    transcendentZoneStage1Data,
    transcendentZone.stage1,
    'text',
  );
  const localizedStage2 = mapWithLocalization(
    transcendentZoneStage2Data,
    transcendentZone.stage2,
    'text',
  );
  const localizedStage3 = mapWithLocalization(
    transcendentZoneStage3Data,
    transcendentZone.stage3,
    'text',
  );
  const localizedDifficulty = mapWithLocalization(
    transcendentZoneDifficultyData,
    transcendentZone,
    'text',
  );
  const localizedQuest = mapWithLocalization(
    transcendentZoneQuestData,
    transcendentZone,
    'text',
  );
  const localizedRewards = mapWithLocalization(
    transcendentZoneRewardsData,
    transcendentZone.rewards,
    'text',
  );
  const localizedOutro = mapWithLocalization(
    transcendentZoneOutroData,
    transcendentZone,
    'text',
  );

  return (
    <WikiLayout
      title={wiki.transcendentZoneHeader}
      id={id}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedIntro)}
      <Table list={localizedStage1} />
      <Table list={localizedStage2} />
      <Table list={localizedStage3} />
      {renderItemCards(localizedDifficulty)}
      {renderItemCards(localizedQuest)}
      <Table list={localizedRewards} />
      {renderItemCards(localizedOutro)}
    </WikiLayout>
  );
};
