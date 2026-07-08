import styles from './DownloadContent.module.css';
import {
  Button,
  ButtonClose,
  EXTERNAL_LINKS,
  openInNewTab,
  UserIcon,
  useLocalizedData,
  getModalItems,
  ButtonDef,
} from '@/shared';
import { ModalItem } from '@/widgets/Modal/ui';

type ModalItemLocale = {
  header: string;
  description: string;
  altIcon: string;
  buttonYandexDisc?: string;
  buttonMediafire?: string;
};

export const DownloadContent = ({ onClose }: { onClose: () => void }) => {
  const { modal } = useLocalizedData();

  const items = getModalItems().map((item) => {
    const t = modal.download[item.key] as ModalItemLocale;

    const buttons: ButtonDef[] = [];
    if (t.buttonMediafire && item.linkMediafire) {
      buttons.push({ key: 'mediafire', text: t.buttonMediafire, link: item.linkMediafire });
    }

    if (t.buttonYandexDisc && item.linkGYandex) {
      buttons.push({ key: 'yandex', text: t.buttonYandexDisc, link: item.linkGYandex });
    }

    return {
      ...item,
      header: t.header,
      description: t.description,
      altIcon: t.altIcon,
      buttons,
    };
  });

  const hasAnyButtons = items.some((item) => item.buttons.length > 0);

  return (
    <>
      <div className={styles.headerBox}>
        <h2 className={styles.header}>{modal.download.header}</h2>
        <ButtonClose onClose={onClose} />
      </div>
      <div className={styles.content}>
        {items.map(({ key, ...props }) => (
          <ModalItem key={key} {...props} />
        ))}

        {!hasAnyButtons && (
          <div className={styles.demoMessageBox}>
            <p className={styles.text}>
              {modal.download.demoMessage}
            </p>
          </div>
        )}

      </div>
      <div className={styles.footerBox}>
        <p className={styles.text}>{modal.download.description}</p>
        <Button
          className={styles.buttonBlue}
          icon={<UserIcon />}
          text={modal.download.buttonReg}
          onClick={() => openInNewTab(EXTERNAL_LINKS.PERSONAL_ACCOUNT)}
        />
      </div>
    </>
  );
};