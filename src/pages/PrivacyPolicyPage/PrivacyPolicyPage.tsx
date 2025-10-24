import { PageLayout, useLocalizedData } from '@/shared';
import { LegalDocumentLayout } from '@/widgets';

export const PrivacyPolicyPage = () => {
  const { privacyPolicy } = useLocalizedData();
  return (
    <>
      <PageLayout title={privacyPolicy.header}>
        <LegalDocumentLayout typeDoc={'policy'} />
      </PageLayout>
    </>
  );
};
