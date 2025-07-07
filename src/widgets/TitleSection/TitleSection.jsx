import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TitleSection.module.css';
import { useLocalizedData } from '../../shared/lib/hooks';
import { Frame } from '../Frame';
import { Button } from '../../shared/ui';
import {
  BigLogo, CirclesMainEffect,
  ElfWomanCharacter,
  EllipseConcaveEffect,
  EllipseConvexEffect,
  FlareEffect,
  HumanWarCharacter,
  SparksLeftEffect,
  SparksRightEffect,
  SwordIcon,
  TiedScrollIcon,
} from '../../shared/assets/images';
import { PATHS } from '../../shared/lib/constants/paths';
import { openInNewTab } from '../../shared/lib/utils/openInNewTab';
import { EXTERNAL_LINKS } from '../../shared/lib/constants/externalLinks';

export const TitleSection = () => {
  const navigate = useNavigate();
  const { mainInfo } = useLocalizedData();

  return (
    <section className={styles.titleSection}>
      <div className={styles.background} />
      <div className={styles.shadow} />
      <div className={styles.imageContainer}>
        <EllipseConcaveEffect className={styles.ellipseConcave} />
        <EllipseConvexEffect className={styles.ellipseConvex} />
        <FlareEffect className={styles.flare} />
        <BigLogo className={styles.logo} />
        <ElfWomanCharacter className={styles.imageElfWoman} />
        <HumanWarCharacter className={styles.imageWarHuman} />
        <CirclesMainEffect className={styles.circles} />
      </div>
      <SparksLeftEffect className={styles.sparksLeft} />
      <SparksRightEffect className={styles.sparksRight} />
      <div className={styles.textBox}>
        <h1 className={styles.header}>Rebirth</h1>
        <h2 className={styles.subheader}>{mainInfo.subheader}</h2>
        <p className={styles.description}>{mainInfo.description}</p>
        <Frame />
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
