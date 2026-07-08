import {
  bossesKelbimData,
  bossesPaganData,
  bossesSkyTowerData,
  bossesSuppliesData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiBossesContent.module.css';

export const WikiBossesContent = ({ id }: WikiComponentProps) => {
  const { bosses, wiki } = useLocalizedData();

  const localizedKelbim = mapWithLocalization(bossesKelbimData, bosses, 'text');
  const localizedPagan = mapWithLocalization(bossesPaganData, bosses, 'text');
  const localizedSkyTower = mapWithLocalization(
    bossesSkyTowerData,
    bosses,
    'text',
  );
  const localizedSupplies = mapWithLocalization(
    bossesSuppliesData,
    bosses.supplies,
    'text',
  );

  return (
    <WikiLayout title={wiki.bossesHeader} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedKelbim)}
      <Table list={localizedSupplies} />
      {renderItemCards(localizedPagan)}
      <Table list={localizedSupplies} />
      {renderItemCards(localizedSkyTower)}
    </WikiLayout>
  );
};
