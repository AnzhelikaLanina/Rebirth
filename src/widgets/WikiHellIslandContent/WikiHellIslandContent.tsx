import {
  hellIslandIntroData,
  hellIslandBossesData,
  hellIslandListData,
  hellIslandDarionRewardsData,
  hellIslandBelethRewardsData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiHellIslandContent.module.css';

export const WikiHellIslandContent = ({ id }: WikiComponentProps) => {
  const { hellIsland } = useLocalizedData();
  const localizedIntro = mapWithLocalization(
    hellIslandIntroData,
    hellIsland,
    'text',
  );
  const localizedBosses = mapWithLocalization(
    hellIslandBossesData,
    hellIsland,
    'text',
  );
  const localizedList = mapWithLocalization(
    hellIslandListData,
    hellIsland,
    'text',
  );
  const localizedDarionRewards = mapWithLocalization(
    hellIslandDarionRewardsData,
    hellIsland,
    'text',
  );
  const localizedBelethRewards = mapWithLocalization(
    hellIslandBelethRewardsData,
    hellIsland,
    'text',
  );

  const arrivalCards = localizedList.slice(0, 2);
  const zoneCards = localizedList.slice(2, 20);
  const belethBattleCard = localizedList.slice(20);

  return (
    <WikiLayout title={hellIsland.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedIntro)}
      {renderItemCards(arrivalCards)}
      <Table list={localizedBosses} />
      {renderItemCards(zoneCards)}
      <Table list={localizedDarionRewards} />
      {renderItemCards(belethBattleCard)}
      <Table list={localizedBelethRewards} />
    </WikiLayout>
  );
};
