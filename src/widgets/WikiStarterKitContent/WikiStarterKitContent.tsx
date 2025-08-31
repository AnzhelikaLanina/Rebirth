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
    starterKitData.slice(0, 1),
    starterKit,
    'text',
  );
  const localizedItemsBottom = mapWithLocalization(
    starterKitData.slice(1, 2),
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
      {renderItemCards(localizedItemsBottom)}
    </WikiLayout>
  );
};
