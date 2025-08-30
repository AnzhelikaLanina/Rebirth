import styles from './Table.module.css';
import { TableItem } from './ui';
import { TableItemProps } from '@/shared';

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
