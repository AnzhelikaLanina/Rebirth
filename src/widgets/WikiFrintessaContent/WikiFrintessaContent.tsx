import {
  frintessaData,
  frintessaStageOneData,
  frintessaStageTwoData,
  frintessaStageThreeData,
  frintessaQuestData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiFrintessaContent.module.css';

export const WikiFrintessaContent = ({ id }: WikiComponentProps) => {
  const { frintessa, wiki } = useLocalizedData();

  const localizedIntro = mapWithLocalization(frintessaData, frintessa, 'text');
  const localizedStageOne = mapWithLocalization(
    frintessaStageOneData,
    frintessa.stageOne,
    'text',
  );
  const localizedStageTwo = mapWithLocalization(
    frintessaStageTwoData,
    frintessa.stageTwo,
    'text',
  );
  const localizedStageThree = mapWithLocalization(
    frintessaStageThreeData,
    frintessa.stageThree,
    'text',
  );
  const localizedQuest = mapWithLocalization(
    frintessaQuestData,
    frintessa.quest,
    'text',
  );

  return (
    <WikiLayout title={wiki.frintessaHeader} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedIntro)}
      <Table list={localizedStageOne} />
      <Table list={localizedStageTwo} />
      <Table list={localizedStageThree} />
      <Table list={localizedQuest} />
    </WikiLayout>
  );
};
