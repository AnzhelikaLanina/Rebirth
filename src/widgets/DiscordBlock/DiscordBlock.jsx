import styles from './DiscordBlock.module.css';
import {
  CirclesLeftEffect,
  CirclesRightEffect,
  DarkElfWomanCharacter,
  DiscordIcon
} from '../../shared/assets/images';
import { useLocalizedData } from '../../shared/lib/hooks';
import { Button } from '../../shared/ui';
import { openInNewTab } from '../../shared/lib/utils/openInNewTab';
import { EXTERNAL_LINKS } from '../../shared/lib/constants/externalLinks';

export const DiscordBlock = () => {
  const data = useLocalizedData();

  return (
    <div className={styles.container}>
      <div className={styles.shadow} />
      <div className={styles.clipContainer}>
        <div className={styles.ellipse} />
        <CirclesRightEffect className={styles.circlesRight} />
        <CirclesLeftEffect className={styles.circlesLeft} />
      </div>
      <DarkElfWomanCharacter className={styles.characterImage} />
      <h2 className={styles.header}>{data.discord.header}</h2>
      <p className={styles.description}>{data.discord.description}</p>
      <Button
        className={styles.buttonPink}
        text={data.discord.community}
        icon={<DiscordIcon />}
        onClick={() => openInNewTab(EXTERNAL_LINKS.DISCORD)}
      />
    </div>
  );
};
