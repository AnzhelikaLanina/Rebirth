import { PageLayout, useLocalizedData } from '@/shared';
import { LegalDocumentLayout } from '@/widgets';

export const UserAgreementPage = () => {
  const { userAgreement } = useLocalizedData();
  return (
    <>
      <PageLayout title={userAgreement.header}>
        <LegalDocumentLayout typeDoc={'user'} />
      </PageLayout>
    </>
  );
};
