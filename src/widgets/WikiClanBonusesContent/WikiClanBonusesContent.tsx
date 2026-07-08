import styles from './WikiClanBonusesContent.module.css';
import {
  clanBonusesData,
  clanCapacityData,
  clanPointsData,
  clanHeroesReputationData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';

export const WikiClanBonusesContent = ({ id }: WikiComponentProps) => {
  const { clanBonuses } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    clanBonusesData,
    clanBonuses,
    'text',
  );
  const localizedCapacity = mapWithLocalization(
    clanCapacityData,
    clanBonuses.clanCapacity,
    'text',
  );
  const localizedPoints = mapWithLocalization(
    clanPointsData,
    clanBonuses.clanPoints,
    'text',
  );
  const localizedHeroesReputation = mapWithLocalization(
    clanHeroesReputationData,
    clanBonuses,
    'text',
  );
  return (
    <WikiLayout id={id} title={clanBonuses.header} imgStyle={styles.image}>
      {renderItemCards(localizedItems)}
      <Table list={localizedCapacity} />
      <Table list={localizedPoints} />
      {renderItemCards(localizedHeroesReputation)}
    </WikiLayout>
  );
};
