import styles from './LegalDocumentSection.module.css';

type PrivacyPolicyLayoutSectionProps = {
  index: number;
  title: string;
  children: React.ReactNode;
}

export const LegalDocumentSection = ({ index, title, children }: PrivacyPolicyLayoutSectionProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>
        <span>{index}.</span> {title}
      </h2>
      {children}
    </section>
  );
}