import {
  baseStatBonusesStrData,
  baseStatBonusesIntData,
  baseStatBonusesDexData,
  baseStatBonusesWitData,
  baseStatBonusesConData,
  baseStatBonusesMenData,
  mapWithLocalization,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiBaseStatBonusesContent.module.css';

export const WikiBaseStatBonusesContent = ({ id }: WikiComponentProps) => {
  const { baseStatBonuses } = useLocalizedData();
  const localizedStr = mapWithLocalization(
    baseStatBonusesStrData,
    baseStatBonuses.str,
    'text',
  );
  const localizedInt = mapWithLocalization(
    baseStatBonusesIntData,
    baseStatBonuses.int,
    'text',
  );
  const localizedDex = mapWithLocalization(
    baseStatBonusesDexData,
    baseStatBonuses.dex,
    'text',
  );
  const localizedWit = mapWithLocalization(
    baseStatBonusesWitData,
    baseStatBonuses.wit,
    'text',
  );
  const localizedCon = mapWithLocalization(
    baseStatBonusesConData,
    baseStatBonuses.con,
    'text',
  );
  const localizedMen = mapWithLocalization(
    baseStatBonusesMenData,
    baseStatBonuses.men,
    'text',
  );

  return (
    <WikiLayout title={baseStatBonuses.header} id={id} imgStyle={styles.image}>
      <Table list={localizedStr} />
      <Table list={localizedInt} />
      <Table list={localizedDex} />
      <Table list={localizedWit} />
      <Table list={localizedCon} />
      <Table list={localizedMen} />
    </WikiLayout>
  );
};
