import {
  ancientBossesIntroData,
  ancientBossesAntharasLairData,
  ancientBossesIceMonarchData,
  ancientBossesIceMonarchBossesData,
  ancientBossesVolcanoData,
  ancientBossesVolcanoBossesData,
  ancientBossesStormRuinsData,
  ancientBossesQuestData,
  ancientBossesRewardData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiAncientBossesContent.module.css';

export const WikiAncientBossesContent = ({ id }: WikiComponentProps) => {
  const { ancientBosses, wiki } = useLocalizedData();

  const localizedIntro = mapWithLocalization(
    ancientBossesIntroData,
    ancientBosses,
    'text',
  );
  const localizedAntharasLair = mapWithLocalization(
    ancientBossesAntharasLairData,
    ancientBosses,
    'text',
  );
  const localizedIceMonarch = mapWithLocalization(
    ancientBossesIceMonarchData,
    ancientBosses,
    'text',
  );
  const localizedIceMonarchBosses = mapWithLocalization(
    ancientBossesIceMonarchBossesData,
    ancientBosses.iceMonarchBosses,
    'text',
  );
  const localizedVolcano = mapWithLocalization(
    ancientBossesVolcanoData,
    ancientBosses,
    'text',
  );
  const localizedVolcanoBosses = mapWithLocalization(
    ancientBossesVolcanoBossesData,
    ancientBosses.volcanoBosses,
    'text',
  );
  const localizedStormRuins = mapWithLocalization(
    ancientBossesStormRuinsData,
    ancientBosses,
    'text',
  );
  const localizedQuest = mapWithLocalization(
    ancientBossesQuestData,
    ancientBosses,
    'text',
  );
  const localizedReward = mapWithLocalization(
    ancientBossesRewardData,
    ancientBosses.reward,
    'text',
  );

  return (
    <WikiLayout title={wiki.ancientBossesHeader} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedIntro)}
      {renderItemCards(localizedAntharasLair)}
      {renderItemCards(localizedIceMonarch)}
      <Table list={localizedIceMonarchBosses} />
      {renderItemCards(localizedVolcano)}
      <Table list={localizedVolcanoBosses} />
      {renderItemCards(localizedStormRuins)}
      {renderItemCards(localizedQuest)}
      <Table list={localizedReward} />
    </WikiLayout>
  );
};
