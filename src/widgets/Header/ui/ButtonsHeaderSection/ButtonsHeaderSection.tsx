import styles from './ButtonsHeaderSection.module.css';
import {
  Button,
  DiscordIcon,
  EXTERNAL_LINKS,
  openInNewTab,
  useLocalizedData,
  UserIcon,
} from '@/shared';

export const ButtonsHeaderSection = () => {
  const { layout } = useLocalizedData();
  return (
    <div className={styles.buttons}>
      <Button
        className={styles.buttonPink}
        icon={<DiscordIcon />}
        text={layout.community}
        onClick={() => openInNewTab(EXTERNAL_LINKS.DISCORD)}
      />
      <Button
        className={styles.buttonBlue}
        icon={<UserIcon />}
        text={layout.personalAccount}
        onClick={() => openInNewTab(EXTERNAL_LINKS.PERSONAL_ACCOUNT)}
      />
    </div>
  );
};
