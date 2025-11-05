import { ListBlock, SectionBlock, TextBlock, useLocalizedData } from '@/shared';

export const PolicyLayout = () => {
  const { privacyPolicy } = useLocalizedData();
  const { generalProvisions, dataProcessing, policyChanges, personalData } =
    privacyPolicy;

  const { dataUsePurposesIntro, dataTransferCasesIntro } = dataProcessing;
  return (
    <>
      <SectionBlock index={1} title={generalProvisions.header}>
        <TextBlock block={generalProvisions} />
      </SectionBlock>
      <SectionBlock index={2} title={dataProcessing.header}>
        <TextBlock block={dataProcessing} from={0} to={1} />
        <ListBlock list={dataUsePurposesIntro} />
        <TextBlock block={dataProcessing} from={1} to={3} />
        <ListBlock list={dataTransferCasesIntro} />
        <TextBlock block={dataProcessing} from={3} />
      </SectionBlock>
      <SectionBlock index={3} title={policyChanges.header}>
        <TextBlock block={policyChanges} />
      </SectionBlock>
      <SectionBlock index={4} title={personalData.header}>
        <TextBlock block={personalData} />
      </SectionBlock>
    </>
  );
};
