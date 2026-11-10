import {
  andreasVanHolterData,
  andreasVanHolterUnlockData,
  andreasVanHolterQuestData,
  andreasVanHolterVictoryRewardData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiAndreasVanHolterContent.module.css';

export const WikiAndreasVanHolterContent = ({ id }: WikiComponentProps) => {
  const { andreasVanHolter, wiki } = useLocalizedData();

  const localizedIntro = mapWithLocalization(
    andreasVanHolterData,
    andreasVanHolter,
    'text',
  );
  const localizedUnlock = mapWithLocalization(
    andreasVanHolterUnlockData,
    andreasVanHolter,
    'text',
  );
  const localizedQuest = mapWithLocalization(
    andreasVanHolterQuestData,
    andreasVanHolter.quest,
    'text',
  );
  const localizedVictoryReward = mapWithLocalization(
    andreasVanHolterVictoryRewardData,
    andreasVanHolter.victoryReward,
    'text',
  );

  return (
    <WikiLayout
      title={wiki.andreasVanHolterHeader}
      id={id}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedIntro)}
      {renderItemCards(localizedUnlock)}
      <Table list={localizedQuest} />
      <Table list={localizedVictoryReward} />
    </WikiLayout>
  );
};
