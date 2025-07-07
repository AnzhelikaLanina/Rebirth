import styles from './ButtonsHeaderSection.module.css';
import { Button } from '../../../../shared/ui';
import { useLocalizedData } from '../../../../shared/lib/hooks';
import { DiscordIcon, UserIcon } from '../../../../shared/assets/images';
import { openInNewTab } from '../../../../shared/lib/utils/openInNewTab';
import { EXTERNAL_LINKS } from '../../../../shared/lib/constants/externalLinks';

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
