import styles from './WikiStarterKitContent.module.css';
import { mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';
import { starterKitData } from '@/shared/lib/constants/wiki/starterKitData';
import { Table } from '@/widgets';
import { packageItemsData } from '@/shared/lib/constants/wiki/packageItemsData';
import { WikiComponentProps } from '@/shared/types';

export const WikiStarterKitContent = ({ id }: WikiComponentProps) => {
  const { starterKit } = useLocalizedData();

  const localizedItemsTop = mapWithLocalization(starterKitData.slice(0, 2), starterKit, 'text');
  const localizedItemsBottom = mapWithLocalization(starterKitData.slice(2, 3), starterKit, 'text');
  const localizedItemsPackage = mapWithLocalization(packageItemsData, starterKit.package, 'text');

  return (
    <div className={styles.content} id={id}>
      <div className={styles.info}>
        <h3 className={styles.header}>{starterKit.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItemsTop)}
      <Table list={localizedItemsPackage} />
      {renderItemCards(localizedItemsBottom)}
    </div>
  )
}