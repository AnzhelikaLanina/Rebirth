import { PageLayout, useLocalizedData } from '@/shared';

export const PrivacyPolicyPage = () => {
  const { privacyPolicy } = useLocalizedData();
  return (
    <>
      <PageLayout title={privacyPolicy.header}>
        <div></div>
      </PageLayout>
    </>
  );
};
