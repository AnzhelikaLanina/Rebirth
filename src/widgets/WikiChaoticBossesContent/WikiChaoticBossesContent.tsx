import {
  chaoticBossesIntroData,
  chaoticBossesBossesData,
  chaoticBossesMidData,
  chaoticBossesRewardsData,
  chaoticBossesProphecyIntroData,
  chaoticBossesProphecyData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiChaoticBossesContent.module.css';

export const WikiChaoticBossesContent = ({ id }: WikiComponentProps) => {
  const { chaoticBosses } = useLocalizedData();
  const localizedIntro = mapWithLocalization(
    chaoticBossesIntroData,
    chaoticBosses,
    'text',
  );
  const localizedBosses = mapWithLocalization(
    chaoticBossesBossesData,
    chaoticBosses,
    'text',
  );
  const localizedMid = mapWithLocalization(
    chaoticBossesMidData,
    chaoticBosses,
    'text',
  );
  const localizedRewards = mapWithLocalization(
    chaoticBossesRewardsData,
    chaoticBosses,
    'text',
  );
  const localizedProphecyIntro = mapWithLocalization(
    chaoticBossesProphecyIntroData,
    chaoticBosses,
    'text',
  );
  const localizedProphecy = mapWithLocalization(
    chaoticBossesProphecyData,
    chaoticBosses,
    'text',
  );

  return (
    <WikiLayout title={chaoticBosses.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedIntro)}
      <Table list={localizedBosses} />
      {renderItemCards(localizedMid)}
      <Table list={localizedRewards} />
      {renderItemCards(localizedProphecyIntro)}
      <Table list={localizedProphecy} />
    </WikiLayout>
  );
};
