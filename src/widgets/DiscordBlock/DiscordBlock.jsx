import styles from './DiscordBlock.module.css';
import { DiscordIcon } from '@/shared/assets/images';
import { useLocalizedData } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui';
import { openInNewTab } from '@/shared/lib/utils/openInNewTab';
import { EXTERNAL_LINKS } from '@/shared/lib/constants/externalLinks';
import darkElfWomanCharacter from '../../shared/assets/images/characters/dark-elf-woman.svg?/url';
import circlesLeftEffect from '../../shared/assets/images/effects/circles-left.svg?/url';
import circlesRightEffect from '../../shared/assets/images/effects/circles-right.svg?/url';

export const DiscordBlock = () => {
  const data = useLocalizedData();

  return (
    <div className={styles.container}>
      <div className={styles.shadow} />
      <div className={styles.clipContainer}>
        <div className={styles.ellipse} />
        <img src={circlesRightEffect} className={styles.circlesRight} alt="" />
        <img src={circlesLeftEffect} className={styles.circlesLeft} alt="" />
      </div>
      <img src={darkElfWomanCharacter} className={styles.characterImage} />
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
