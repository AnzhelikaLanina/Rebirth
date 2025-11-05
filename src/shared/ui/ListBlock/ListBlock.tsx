import styles from './ListBlock.module.css';

type ListProps = {
  list: Record<string, any>;
};

export const ListBlock = ({ list }: ListProps) => {
  const { header, ...rest } = list;

  const items = Object.entries(rest)
    .map(([_, value]) => value)
    .filter(Boolean);

  return (
    <div className={styles.block}>
      {header && <p className={styles.text}>{header}</p>}
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.text}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
