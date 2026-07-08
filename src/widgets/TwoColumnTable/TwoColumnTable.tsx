import styles from './TwoColumnTable.module.css';

type TwoColumnTableItem = {
  left: string;
  right: string;
  image?: boolean;
  src?: string;
  alt?: string;
};

type TwoColumnTableProps = {
  items: TwoColumnTableItem[];
  header?: { left: string; right: string };
};

export const TwoColumnTable = ({ items, header }: TwoColumnTableProps) => {
  return (
    <div className={styles.table}>
      {header && (
        <div className={styles.tableHeader}>
          <p className={styles.tableHeaderText}>{header.left}</p>
          <p className={styles.tableHeaderText}>{header.right}</p>
        </div>
      )}
      {items.map((item, index) => (
        <div key={index} className={styles.tableRow}>
          <div className={styles.tableCell}>
            {item.image && item.src && (
              <img src={item.src} className={styles.img} alt={item.alt || ''} />
            )}
            <p className={styles.tableText}>{item.left}</p>
          </div>
          <div className={styles.tableCell}>
            <p className={styles.tableText}>{item.right}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
