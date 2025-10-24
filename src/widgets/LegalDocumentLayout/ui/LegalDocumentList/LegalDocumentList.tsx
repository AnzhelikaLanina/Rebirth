import styles from './LegalDocumentList.module.css';

type PrivacyPolicyListProps = {
  list: Record<string, any>;
};

export const LegalDocumentList= ({ list }: PrivacyPolicyListProps) => {
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
