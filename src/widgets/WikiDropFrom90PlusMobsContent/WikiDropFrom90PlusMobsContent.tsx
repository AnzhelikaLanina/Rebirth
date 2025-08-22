import styles from './WikiDropFrom90PlusMobsContent.module.css';
import { mapWithLocalization, useLocalizedData } from '@/shared/lib';
import { Table } from '@/widgets';
import { dropFrom90PlusMobsData } from '@/shared/lib/constants/wiki/dropFrom90PlusMobsData';

export const WikiDropFrom90PlusMobsContent = () => {
  const { dropFrom90PlusMobs } = useLocalizedData();
  const localizedItems = mapWithLocalization(dropFrom90PlusMobsData, dropFrom90PlusMobs.description, 'text')
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <h3 className={styles.header}>{dropFrom90PlusMobs.header}</h3>
        <div className={styles.image} />
      </div>
      <Table list={localizedItems} />
    </div>
  )
}