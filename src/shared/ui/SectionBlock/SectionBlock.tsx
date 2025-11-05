import styles from './SectionBlock.module.css';

type PrivacyPolicyLayoutSectionProps = {
  index?: number;
  title: string;
  children: React.ReactNode;
};

export const SectionBlock = ({
  index,
  title,
  children,
}: PrivacyPolicyLayoutSectionProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>
        {index && <span>{index}.</span>} {title}
      </h2>
      {children}
    </section>
  );
};
