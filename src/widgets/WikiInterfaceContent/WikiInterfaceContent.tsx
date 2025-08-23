import styles from './WikiInterfaceContent.module.css';
import { mapWithLocalization, renderItemCards, useLocalizedData } from '@/shared/lib';
import { interfaceData } from '@/shared/lib/constants/wiki/interfaceData';
import { WikiComponentProps } from '@/shared/types';

export const WikiInterfaceContent = ({ id }: WikiComponentProps) => {
  const { interfaceContent } = useLocalizedData();
  const localizedItems = mapWithLocalization(interfaceData, interfaceContent, 'text')
  return (
    <div className={styles.content} id={id}>
      <div className={styles.info}>
        <h3 className={styles.header}>{interfaceContent.header}</h3>
        <div className={styles.image} />
      </div>
      {renderItemCards(localizedItems)}
    </div>
  );
}