import {
  celestiaBattleIntroData,
  celestiaBattleStage1Data,
  celestiaBattleStage2Data,
  celestiaBattleStage3Data,
  celestiaBattleStage4Data,
  celestiaBattleKnightsRewardData,
  celestiaBattleKnightsRewardsListData,
  celestiaBattleChanceInfoData,
  celestiaBattleBaseChancesData,
  celestiaBattleNumberKnightsData,
  celestiaBattleGuaranteedRewardData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiCelestiaBattleContent.module.css';

export const WikiCelestiaBattleContent = ({ id }: WikiComponentProps) => {
  const { celestiaBattle } = useLocalizedData();
  const localizedIntro = mapWithLocalization(
    celestiaBattleIntroData,
    celestiaBattle,
    'text',
  );
  const localizedStage1 = mapWithLocalization(
    celestiaBattleStage1Data,
    celestiaBattle.stage1,
    'text',
  );
  const localizedStage2 = mapWithLocalization(
    celestiaBattleStage2Data,
    celestiaBattle.stage2,
    'text',
  );
  const localizedStage3 = mapWithLocalization(
    celestiaBattleStage3Data,
    celestiaBattle.stage3,
    'text',
  );
  const localizedStage4 = mapWithLocalization(
    celestiaBattleStage4Data,
    celestiaBattle.stage4,
    'text',
  );
  const localizedKnightsReward = mapWithLocalization(
    celestiaBattleKnightsRewardData,
    celestiaBattle.stage4,
    'text',
  );
  const localizedKnightsRewardsList = mapWithLocalization(
    celestiaBattleKnightsRewardsListData,
    celestiaBattle.stage4,
    'text',
  );
  const localizedChanceInfo = mapWithLocalization(
    celestiaBattleChanceInfoData,
    celestiaBattle.stage4,
    'text',
  );
  const localizedBaseChances = mapWithLocalization(
    celestiaBattleBaseChancesData,
    celestiaBattle.stage4,
    'text',
  );
  const localizedNumberKnights = mapWithLocalization(
    celestiaBattleNumberKnightsData,
    celestiaBattle.stage4,
    'text',
  );
  const localizedGuaranteedReward = mapWithLocalization(
    celestiaBattleGuaranteedRewardData,
    celestiaBattle.stage4,
    'text',
  );

  return (
    <WikiLayout title={celestiaBattle.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedIntro)}
      <Table list={localizedStage1} />
      <Table list={localizedStage2} />
      <Table list={localizedStage3} />
      <Table list={localizedStage4} />
      {renderItemCards(localizedKnightsReward)}
      <Table list={localizedKnightsRewardsList} />
      {renderItemCards(localizedChanceInfo)}
      <Table list={localizedBaseChances} />
      {renderItemCards(localizedNumberKnights)}
      <Table list={localizedGuaranteedReward} />
    </WikiLayout>
  );
};
