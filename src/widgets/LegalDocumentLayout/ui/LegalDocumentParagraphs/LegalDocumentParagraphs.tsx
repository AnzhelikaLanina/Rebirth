import styles from './LegalDocumentParagraphs.module.css';
import { isPlainObject } from '@/widgets';

type PrivacyPolicyParagraphsProps = {
  block: Record<string, any>;
  from?: number;
  to?: number;
  sectionIndex?: number | string;
  startAt?: number;
  formatLabel?: (section: number | string, n: number) => string;
  capLet?: boolean;
};

export const LegalDocumentParagraphs = ({
  block,
  from = 0,
  to,
  sectionIndex,
  startAt = 1,
  formatLabel= (s, n) => `${s}.${n}.`,
  capLet = false,
}: PrivacyPolicyParagraphsProps) => {
  const paragraphs = Object.entries(block)
    .filter(([key, val]) => key !== 'header' && !isPlainObject(val) && val)
    .map(([, val]) => val as React.ReactNode);

  const slice = paragraphs.slice(from, to);

  const toUpperExceptDomain = (text: string) =>
    capLet
      ? text.replaceAll('l2rebirth.net', '§TEMP§').toUpperCase().replaceAll('§TEMP§', 'l2rebirth.net')
      : text;

  return (
    <>
      {slice.map((text, i) => (
        <p className={styles.text} key={i}>
          {sectionIndex && <span>{formatLabel(sectionIndex, startAt + i)} </span>}
          {typeof text === 'string' ? toUpperExceptDomain(text) : text}
        </p>
      ))}
    </>
  );
};