import styles from './LegalDocumentLayout.module.css';
import {
  LegalDocumentParagraphs,
  LegalDocumentSection,
  LegalDocumentList
} from '@/widgets';
import { useLocalizedData } from '@/shared';

type LegalDocumentLayoutProps = {
  typeDoc: 'user' | 'policy';
}

export const LegalDocumentLayout = ({ typeDoc }: LegalDocumentLayoutProps) => {
  const { privacyPolicy, userAgreement } = useLocalizedData();
  const {
    generalProvisions,
    dataProcessing,
    policyChanges,
    personalData
  } = privacyPolicy;

  const {
    dataUsePurposesIntro,
    dataTransferCasesIntro
  } = dataProcessing;

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
    disclaimer
  } = userAgreement;

  const {
    userRights,
    userRestrictions
  } = rightsAndObligations;

  const { userRightsList } = userRights;
  const { userRestrictionsList } = userRestrictions;

  return (
    <main className={styles.main}>
      {typeDoc === 'policy'?
        <>
          <LegalDocumentSection index={1} title={generalProvisions.header}>
            <LegalDocumentParagraphs block={generalProvisions} />
          </LegalDocumentSection>
          <LegalDocumentSection index={2} title={dataProcessing.header}>
            <LegalDocumentParagraphs block={dataProcessing} from={0} to={1} />
            <LegalDocumentList list={dataUsePurposesIntro} />
            <LegalDocumentParagraphs block={dataProcessing} from={1} to={3} />
            <LegalDocumentList list={dataTransferCasesIntro} />
            <LegalDocumentParagraphs block={dataProcessing} from={3} />
          </LegalDocumentSection>
          <LegalDocumentSection index={3} title={policyChanges.header}>
            <LegalDocumentParagraphs block={policyChanges} />
          </LegalDocumentSection>
          <LegalDocumentSection index={4} title={personalData.header}>
            <LegalDocumentParagraphs block={personalData} />
          </LegalDocumentSection>
        </>
        :
        <>
          <p className={styles.text}>{userAgreement.description}</p>
          <LegalDocumentSection index={1} title={terms.header}>
            <LegalDocumentParagraphs block={terms} />
          </LegalDocumentSection>
          <LegalDocumentSection index={2} title={agreementSubject.header}>
            <LegalDocumentParagraphs
              block={agreementSubject}
              sectionIndex={2}
              startAt={1}
            />
          </LegalDocumentSection>
          <LegalDocumentSection index={3} title={agreementEffective.header}>
            <LegalDocumentParagraphs
              block={agreementEffective}
              sectionIndex={3}
              startAt={1}
            />
          </LegalDocumentSection>
          <LegalDocumentSection index={4} title={rightsAndObligations.header}>
            <LegalDocumentParagraphs
              block={userRights}
              from={0}
              to={1}
              sectionIndex={4}
              startAt={1}
            />
            <LegalDocumentList list={userRightsList} />
            <LegalDocumentParagraphs block={userRights} from={1} />
            <LegalDocumentParagraphs
              block={userRestrictions}
              sectionIndex={4}
              startAt={2}
            />
            <LegalDocumentList list={userRestrictionsList} />
          </LegalDocumentSection>
          <LegalDocumentSection index={5} title={providerRights.header}>
            <LegalDocumentParagraphs block={providerRights} from={0} to={1} />
            <LegalDocumentParagraphs
              block={providerRights}
              from={1}
              to={3}
              sectionIndex={5}
              startAt={1}
            />
            <LegalDocumentParagraphs block={providerRights} from={3} />
          </LegalDocumentSection>
          <LegalDocumentSection index={6} title={providerObligations.header}>
            <LegalDocumentParagraphs
              block={providerObligations}
              from={0}
              to={1}
              sectionIndex={6}
              startAt={1}
            />
            <LegalDocumentParagraphs block={providerObligations} from={1} />
          </LegalDocumentSection>
          <LegalDocumentSection index={7} title={providerLiabilityLimitation.header}>
            <LegalDocumentParagraphs
              block={providerLiabilityLimitation}
              from={0}
              to={1}
            />
            <LegalDocumentParagraphs
              block={providerLiabilityLimitation}
              from={1}
              sectionIndex={7}
              startAt={1}
            />
          </LegalDocumentSection>
          <LegalDocumentSection index={8} title={providerNoGuarantees.header}>
            <LegalDocumentParagraphs
              block={providerNoGuarantees}
              sectionIndex={8}
              startAt={1}
            />
          </LegalDocumentSection>
          <LegalDocumentSection index={9} title={paidServices.header}>
            <LegalDocumentParagraphs
              block={paidServices}
              sectionIndex={9}
              startAt={1}
            />
          </LegalDocumentSection>
          <LegalDocumentSection index={10} title={refundPolicy.header}>
            <LegalDocumentParagraphs
              block={refundPolicy}
              from={0}
              to={2}
              sectionIndex={10}
              startAt={1}
            />
            <LegalDocumentParagraphs
              block={refundPolicy}
              from={2}
              to={4}
            />
            <LegalDocumentParagraphs
              block={refundPolicy}
              from={4}
              sectionIndex={10}
              startAt={3}
            />
          </LegalDocumentSection>
          <LegalDocumentSection index={11} title={disclaimer.header}>
            <LegalDocumentParagraphs block={disclaimer} capLet={true} />
          </LegalDocumentSection>
        </>
      }
    </main>
  );
}