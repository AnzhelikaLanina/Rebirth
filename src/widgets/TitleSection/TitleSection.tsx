import { useNavigate } from 'react-router-dom';
import styles from './TitleSection.module.css';
import { PATHS, EXTERNAL_LINKS, useLocalizedData, openInNewTab } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { SwordIcon, TiedScrollIcon } from '@/shared/assets/images';
import { Frame } from '../Frame';
import bigLogo from '../../shared/assets/images/logos/big-logo.svg?url';
import sparksRightEffect from '../../shared/assets/images/effects/sparks-right.svg?url';
import sparksLeftEffect from '../../shared/assets/images/effects/sparks-left.svg?url';
import flareEffect from '../../shared/assets/images/effects/flare.svg?url';
import elfWomanCharacter from '../../shared/assets/images/characters/elf-woman.svg?url';
import humanWarCharacter from '../../shared/assets/images/characters/human-war.svg?url';
import circlesMainEffect from '../../shared/assets/images/effects/circles-main.svg?url';
import ellipseConcaveEffect from '../../shared/assets/images/effects/ellipse-concave.svg?url';
import ellipseConvexEffect from '../../shared/assets/images/effects/ellipse-convex.svg?url';

export const TitleSection = () => {
  const navigate = useNavigate();
  const { mainInfo } = useLocalizedData();
  return (
    <section className={styles.titleSection}>
      <div className={styles.background} />
      <div className={styles.shadow} />
      <div className={styles.imageContainer}>
        <img src={ellipseConcaveEffect} className={styles.ellipseConcave} alt="" />
        <img src={ellipseConvexEffect} className={styles.ellipseConvex} alt="" />
        <img src={flareEffect} className={styles.flare} alt="" />
        <img src={bigLogo} className={styles.logo} alt="" />
        <img src={elfWomanCharacter} className={styles.imageElfWoman} alt={mainInfo.altElf} />
        <img src={humanWarCharacter} className={styles.imageWarHuman} alt={mainInfo.altHumanWar} />
        <img src={circlesMainEffect} className={styles.circles} alt="" />
        <Frame />
      </div>
      <img src={sparksLeftEffect} className={styles.sparksLeft} alt="" />
      <img src={sparksRightEffect} className={styles.sparksRight} alt="" />
      <div className={styles.textBox}>
        <h1 className={styles.header}>Rebirth</h1>
        <h2 className={styles.subheader}>{mainInfo.subheader}</h2>
        <p className={styles.description}>{mainInfo.description}</p>
        <div className={styles.buttons}>
          <Button
            className={styles.buttonBlue}
            text={mainInfo.newGame}
            icon={<SwordIcon />}
            onClick={() => openInNewTab(EXTERNAL_LINKS.DISCORD)}
          />
          <Button
            className={styles.buttonYellow}
            text={mainInfo.info}
            icon={<TiedScrollIcon />}
            onClick={() => navigate(PATHS.WIKI)}
          />
        </div>
      </div>
    </section>
  );
};
