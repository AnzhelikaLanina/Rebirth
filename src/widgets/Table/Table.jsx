import styles from './Table.module.css';
import { TableItem } from './ui';

export const Table = ({ list }) => {
  return (
    <div className={styles.table}>
      {list.map((item, index) => (
        <TableItem
          key={index}
          header={item.header}
          img={item.img}
          src={item.src}
          alt={item.alt}
          text={item.text}
        />
      ))}
    </div>
  );
};
