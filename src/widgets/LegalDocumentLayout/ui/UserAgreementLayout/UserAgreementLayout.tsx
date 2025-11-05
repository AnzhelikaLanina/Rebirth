import { ListBlock, SectionBlock, TextBlock, useLocalizedData } from '@/shared';

export const UserAgreementLayout = () => {
  const { userAgreement } = useLocalizedData();

  const {
    terms,
    agreementSubject,
    agreementEffective,
    rightsAndObligations,
    providerRights,
    providerObligations,
    providerLiabilityLimitation,
    providerNoGuarantees,
    paidServices,
    refundPolicy,
    disclaimer,
  } = userAgreement;

  const { userRights, userRestrictions } = rightsAndObligations;

  const { userRightsList } = userRights;
  const { userRestrictionsList } = userRestrictions;

  return (
    <>
      <TextBlock block={userAgreement} />
      <SectionBlock index={1} title={terms.header}>
        <TextBlock block={terms} />
      </SectionBlock>
      <SectionBlock index={2} title={agreementSubject.header}>
        <TextBlock block={agreementSubject} sectionIndex={2} startAt={1} />
      </SectionBlock>
      <SectionBlock index={3} title={agreementEffective.header}>
        <TextBlock block={agreementEffective} sectionIndex={3} startAt={1} />
      </SectionBlock>
      <SectionBlock index={4} title={rightsAndObligations.header}>
        <TextBlock
          block={userRights}
          from={0}
          to={1}
          sectionIndex={4}
          startAt={1}
        />
        <ListBlock list={userRightsList} />
        <TextBlock block={userRights} from={1} />
        <TextBlock block={userRestrictions} sectionIndex={4} startAt={2} />
        <ListBlock list={userRestrictionsList} />
      </SectionBlock>
      <SectionBlock index={5} title={providerRights.header}>
        <TextBlock block={providerRights} from={0} to={1} />
        <TextBlock
          block={providerRights}
          from={1}
          to={3}
          sectionIndex={5}
          startAt={1}
        />
        <TextBlock block={providerRights} from={3} />
      </SectionBlock>
      <SectionBlock index={6} title={providerObligations.header}>
        <TextBlock
          block={providerObligations}
          from={0}
          to={1}
          sectionIndex={6}
          startAt={1}
        />
        <TextBlock block={providerObligations} from={1} />
      </SectionBlock>
      <SectionBlock index={7} title={providerLiabilityLimitation.header}>
        <TextBlock block={providerLiabilityLimitation} from={0} to={1} />
        <TextBlock
          block={providerLiabilityLimitation}
          from={1}
          sectionIndex={7}
          startAt={1}
        />
      </SectionBlock>
      <SectionBlock index={8} title={providerNoGuarantees.header}>
        <TextBlock block={providerNoGuarantees} sectionIndex={8} startAt={1} />
      </SectionBlock>
      <SectionBlock index={9} title={paidServices.header}>
        <TextBlock block={paidServices} sectionIndex={9} startAt={1} />
      </SectionBlock>
      <SectionBlock index={10} title={refundPolicy.header}>
        <TextBlock
          block={refundPolicy}
          from={0}
          to={2}
          sectionIndex={10}
          startAt={1}
        />
        <TextBlock block={refundPolicy} from={2} to={4} />
        <TextBlock
          block={refundPolicy}
          from={4}
          sectionIndex={10}
          startAt={3}
        />
      </SectionBlock>
      <SectionBlock index={11} title={disclaimer.header}>
        <TextBlock block={disclaimer} capLet={true} />
      </SectionBlock>
    </>
  );
};
