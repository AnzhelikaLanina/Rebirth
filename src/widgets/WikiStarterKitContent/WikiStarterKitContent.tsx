import styles from './WikiStarterKitContent.module.css';
import { Table } from '@/widgets';
import {
  mapWithLocalization,
  packageItemsData,
  renderItemCards,
  starterKitData,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';

export const WikiStarterKitContent = ({ id }: WikiComponentProps) => {
  const { starterKit } = useLocalizedData();

  const localizedItemsTop = mapWithLocalization(
    starterKitData,
    starterKit,
    'text',
  );
  const localizedItemsPackage = mapWithLocalization(
    packageItemsData,
    starterKit.package,
    'text',
  );

  return (
    <WikiLayout title={starterKit.header} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedItemsTop)}
      <Table list={localizedItemsPackage} />
    </WikiLayout>
  );
};
