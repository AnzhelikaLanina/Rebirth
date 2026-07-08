import {
  mafiaHideoutData,
  mafiaHideoutFinalBlowData,
  mafiaHideoutAgentData,
  mafiaHideoutRewardsTitleData,
  mafiaHideoutRewardsData,
  mafiaHideoutQuestRewardData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiMafiaHideoutContent.module.css';

export const WikiMafiaHideoutContent = ({ id }: WikiComponentProps) => {
  const { mafiaHideout } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    mafiaHideoutData,
    mafiaHideout,
    'text',
  );
  const localizedFinalBlow = mapWithLocalization(
    mafiaHideoutFinalBlowData,
    mafiaHideout,
    'text',
  );
  const localizedAgent = mapWithLocalization(
    mafiaHideoutAgentData,
    mafiaHideout,
    'text',
  );
  const localizedRewardsTitle = mapWithLocalization(
    mafiaHideoutRewardsTitleData,
    mafiaHideout.rewards,
    'text',
  );
  const localizedRewards = mapWithLocalization(
    mafiaHideoutRewardsData,
    mafiaHideout.rewards,
    'text',
  );
  const localizedQuestReward = mapWithLocalization(
    mafiaHideoutQuestRewardData,
    mafiaHideout.rewards,
    'text',
  );

  return (
    <WikiLayout title={mafiaHideout.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedItems)}
      {renderItemCards(localizedRewardsTitle)}
      <Table list={localizedRewards} />
      <Table list={localizedFinalBlow} />
      {renderItemCards(localizedAgent)}
      <Table list={localizedQuestReward} />
    </WikiLayout>
  );
};
