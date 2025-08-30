import styles from './WikiDropFrom90PlusMobsContent.module.css';
import { Table } from '@/widgets';
import {
  dropFrom90PlusMobsData,
  mapWithLocalization,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiDropFrom90PlusMobsContent = ({ id }: WikiComponentProps) => {
  const { dropFrom90PlusMobs } = useLocalizedData();
  const localizedItems = mapWithLocalization(
    dropFrom90PlusMobsData,
    dropFrom90PlusMobs.description,
    'text'
  );
  return (
    <WikiLayout
      id={id}
      title={dropFrom90PlusMobs.header}
      imgStyle={styles.image}
    >
      <Table list={localizedItems} />
    </WikiLayout>
  )
}