import { PageLayout, useLocalizedData } from '@/shared';

export const UserAgreementPage = () => {
  const { userAgreement } = useLocalizedData();
  return (
    <>
      <PageLayout title={userAgreement.header}>
        <div></div>
      </PageLayout>
    </>
  )
}
