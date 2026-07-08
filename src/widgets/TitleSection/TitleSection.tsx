import { useNavigate } from 'react-router-dom';
import styles from './TitleSection.module.css';
import bigLogo from '../../shared/assets/images/logos/big-logo.svg?url';
import sparksRightEffect from '../../shared/assets/images/effects/sparks-right.svg?url';
import sparksLeftEffect from '../../shared/assets/images/effects/sparks-left.svg?url';
import flareEffect from '../../shared/assets/images/effects/flare.svg?url';
import elfWomanCharacter from '../../shared/assets/images/characters/elf-woman.svg?url';
import humanWarCharacter from '../../shared/assets/images/characters/human-war.svg?url';
import circlesMainEffect from '../../shared/assets/images/effects/circles-main.svg?url';
import ellipseConcaveEffect from '../../shared/assets/images/effects/ellipse-concave.svg?url';
import ellipseConvexEffect from '../../shared/assets/images/effects/ellipse-convex.svg?url';
import { Frame } from '../Frame';
import { Advertisement } from '../Advertisement';
import {
  PATHS,
  EXTERNAL_LINKS,
  DATES,
  useLocalizedData,
  openInNewTab,
  withChronicleUpdate,
  Button,
  SwordIcon,
  TiedScrollIcon,
} from '@/shared';

const formatDate = (iso: string) => {
  const d = new Date(iso);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  return `${day}/${month}/${d.getFullYear()}`;
};

export const TitleSection = () => {
  const navigate = useNavigate();
  const { mainInfo } = useLocalizedData();

  const subUpdateLine = withChronicleUpdate(mainInfo.subUpdate);
  const subGrandOpenLine = mainInfo.subGrandOpen.replace(
    '{{DATE}}',
    formatDate(DATES.SERVER_2026_SEP),
  );
  const subBetaLine = mainInfo.subBeta.replace(
    '{{DATE}}',
    formatDate(DATES.BETA_2026_SEP),
  );

  return (
    <section className={styles.titleSection}>
      <div className={styles.background} />
      <div className={styles.shadow} />
      <div className={styles.advertisementWrapper}>
        <Advertisement />
      </div>
      <div className={styles.imageContainer}>
        <img
          src={ellipseConcaveEffect}
          className={styles.ellipseConcave}
          alt=""
        />
        <img
          src={ellipseConvexEffect}
          className={styles.ellipseConvex}
          alt=""
        />
        <img src={flareEffect} className={styles.flare} alt="" />
        <img src={bigLogo} className={styles.logo} alt="" />
        <img
          src={elfWomanCharacter}
          className={styles.imageElfWoman}
          alt={mainInfo.altElf}
        />
        <img
          src={humanWarCharacter}
          className={styles.imageWarHuman}
          alt={mainInfo.altHumanWar}
        />
        <img src={circlesMainEffect} className={styles.circles} alt="" />
      </div>
      <div className={styles.frameLayer}>
        <Frame targetDate={new Date(DATES.SERVER_2025).getTime()} />
        <Frame lower />
      </div>
      <img src={sparksLeftEffect} className={styles.sparksLeft} alt="" />
      <img src={sparksRightEffect} className={styles.sparksRight} alt="" />
      <div className={styles.textBox}>
        <h1 className={styles.header}>Rebirth</h1>
        <h2 className={styles.subheader}>
          <span className={styles.subheaderLine}>{subUpdateLine}</span>
          <span className={styles.subheaderLine}>{subGrandOpenLine}</span>
          <span className={styles.subheaderLine}>{subBetaLine}</span>
        </h2>
        <p className={styles.description}>{mainInfo.description}</p>
        <div className={styles.buttons}>
          <Button
            className={styles.buttonBlue}
            text={mainInfo.newGame}
            icon={<SwordIcon />}
            onClick={() => openInNewTab(EXTERNAL_LINKS.PERSONAL_ACCOUNT)}
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
