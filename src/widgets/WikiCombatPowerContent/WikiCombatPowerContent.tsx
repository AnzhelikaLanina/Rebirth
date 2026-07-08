import {
  combatPowerListData,
  mapWithLocalization,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiCombatPowerContent.module.css';

export const WikiCombatPowerContent = ({ id }: WikiComponentProps) => {
  const { combatPower } = useLocalizedData();
  const localizedList = mapWithLocalization(
    combatPowerListData,
    combatPower,
    'text',
  );

  return (
    <WikiLayout title={combatPower.header} id={id} imgStyle={styles.image}>
      <Table list={localizedList} />
    </WikiLayout>
  );
};
