import {
  orcFortressData,
  orcFortressCaptureSkillData,
  orcFortressTasksForAllPlayers2Data,
  orcFortressStormingTitleData,
  orcFortressStormingQuestData,
  orcFortressDifficultStormingTitleData,
  orcFortressDifficultStormingQuestData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiOrcFortressContent.module.css';

export const WikiOrcFortressContent = ({ id }: WikiComponentProps) => {
  const { orcFortress } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    orcFortressData,
    orcFortress,
    'text',
  );
  const localizedCaptureSkill = mapWithLocalization(
    orcFortressCaptureSkillData,
    orcFortress.captureSkill,
    'text',
  );
  const localizedTasksForAllPlayers2 = mapWithLocalization(
    orcFortressTasksForAllPlayers2Data,
    orcFortress,
    'text',
  );
  const localizedStormingTitle = mapWithLocalization(
    orcFortressStormingTitleData,
    orcFortress.stormingQuest,
    'text',
  );
  const localizedStormingQuest = mapWithLocalization(
    orcFortressStormingQuestData,
    orcFortress.stormingQuest,
    'text',
  );
  const localizedDifficultStormingTitle = mapWithLocalization(
    orcFortressDifficultStormingTitleData,
    orcFortress.difficultStormingQuest,
    'text',
  );
  const localizedDifficultStormingQuest = mapWithLocalization(
    orcFortressDifficultStormingQuestData,
    orcFortress.difficultStormingQuest,
    'text',
  );

  return (
    <WikiLayout title={orcFortress.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedItems)}
      <Table list={localizedCaptureSkill} />
      {renderItemCards(localizedTasksForAllPlayers2)}
      {renderItemCards(localizedStormingTitle)}
      <Table list={localizedStormingQuest} />
      {renderItemCards(localizedDifficultStormingTitle)}
      <Table list={localizedDifficultStormingQuest} />
    </WikiLayout>
  );
};
