import styles from './ButtonDownload.module.css';
import { DownloadIcon } from '@/shared/assets/images';
import { ExternalLink } from '@/shared/ui';

type ButtonDownloadProps = {
  text: string;
  link: string;
};

export const ButtonDownload = ({ text, link }: ButtonDownloadProps) => {
  return (
    <ExternalLink href={link} className={styles.button}>
      <DownloadIcon className={styles.icon} />
      <p className={styles.text}>{text}</p>
    </ExternalLink>
  );
};
