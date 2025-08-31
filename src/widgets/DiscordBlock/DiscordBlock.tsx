import styles from './DiscordBlock.module.css';
import darkElfWomanCharacter from '../../shared/assets/images/characters/dark-elf-woman.svg?url';
import circlesLeftEffect from '../../shared/assets/images/effects/circles-left.svg?url';
import circlesRightEffect from '../../shared/assets/images/effects/circles-right.svg?url';
import {
  Button,
  DiscordIcon,
  EXTERNAL_LINKS,
  openInNewTab,
  useLocalizedData,
} from '@/shared';

export const DiscordBlock = () => {
  const { discord } = useLocalizedData();
  return (
    <div className={styles.container}>
      <div className={styles.shadow} />
      <div className={styles.clipContainer}>
        <div className={styles.ellipse} />
        <img src={circlesRightEffect} className={styles.circlesRight} alt="" />
        <img src={circlesLeftEffect} className={styles.circlesLeft} alt="" />
      </div>
      <img
        src={darkElfWomanCharacter}
        className={styles.characterImage}
        alt={discord.altDarkElf}
      />
      <h2 className={styles.header}>{discord.header}</h2>
      <p className={styles.description}>{discord.description}</p>
      <Button
        className={styles.buttonPink}
        text={discord.community}
        icon={<DiscordIcon />}
        onClick={() => openInNewTab(EXTERNAL_LINKS.DISCORD)}
      />
    </div>
  );
};
