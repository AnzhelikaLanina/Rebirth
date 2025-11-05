import styles from './LegalDocumentLayout.module.css';
import { PolicyLayout, UserAgreementLayout } from './ui';

type LegalDocumentLayoutProps = {
  typeDoc: 'user' | 'policy';
};

export const LegalDocumentLayout = ({ typeDoc }: LegalDocumentLayoutProps) => {
  return (
    <main className={styles.main}>
      {typeDoc === 'policy' ? <PolicyLayout /> : <UserAgreementLayout />}
    </main>
  );
};
