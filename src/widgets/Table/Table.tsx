import styles from './Table.module.css';
import { TableItemProps } from '@/shared/types';
import { TableItem } from './ui';

type TableProps = {
  list: TableItemProps[];
};

export const Table = ({ list }: TableProps) => {
  return (
    <div className={styles.table}>
      {list.map((item: TableItemProps, index: number) => (
        <TableItem
          key={index}
          header={item.header}
          image={item.image}
          src={item.src}
          alt={item.alt}
          text={item.text}
        />
      ))}
    </div>
  );
};
