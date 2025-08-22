import styles from './WikiAutoHuntingContent.module.css';
import { mapWithLocalization, useLocalizedData } from '@/shared/lib';
import { Table } from '@/widgets';
import { autoHuntingData } from '@/shared/lib/constants/wiki/autoHuntingData';

export const WikiAutoHuntingContent = () => {
  const { autoHunting } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    autoHuntingData,
    autoHunting.description,
    'text',
  );

  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{autoHunting.header}</h3>
        <div className={styles.image} />
      </div>
      <Table list={localizedItems} />
    </div>
  );
};
