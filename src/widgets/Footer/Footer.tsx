import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import nameAndLogo from '../../shared/assets/images/logos/logo-name.svg?url';
import polygonIcon from '../../shared/assets/images/icons/polygon.svg?url';
import {
  EXTERNAL_LINKS,
  ExternalLink,
  PATHS,
  useLocalizedData,
} from '@/shared';

export const Footer = () => {
  const { layout } = useLocalizedData();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.info}>
          <li className={styles.box}>
            <img
              src={nameAndLogo}
              className={styles.logo}
              alt={layout.altLogo}
            />
            <div className={styles.line} />
            <p className={styles.text}>Lineage 2 Essence x5 Server</p>
          </li>
          <li>
            <Link to={PATHS.USER_AGREEMENT} className={styles.link}>
              {layout.userAgreement}
            </Link>
          </li>
          <li>
            <Link to={PATHS.PRIVACY_POLICY} className={styles.link}>
              {layout.privacyPolicy}
            </Link>
          </li>
        </ul>
        <ul className={styles.links}>
          <li className={styles.element1}>
            <Link to={PATHS.WIKI} className={styles.link}>
              {layout.server}
            </Link>
          </li>
          <li className={styles.element4}>
            <ExternalLink
              href={EXTERNAL_LINKS.REGISTRATION}
              children={layout.registration}
              className={styles.link}
            />
          </li>
          <li className={styles.element5}>
            <ExternalLink
              href={EXTERNAL_LINKS.DISCORD}
              children={'Discord'}
              className={styles.link}
            />
          </li>
          <li className={styles.element6}>
            <ExternalLink
              href={EXTERNAL_LINKS.PERSONAL_ACCOUNT}
              children={layout.personalAccount}
              className={styles.link}
            />
          </li>
        </ul>
        <div className={styles.description}>
          <div className={styles.serverBox}>
            <p className={styles.textDescription}>
              This is only a test server for Rebirth.
            </p>
            <p className={styles.textDescription}>
              Copyright &copy; 2025, Rebirth. Lineage is a trademark owned by
              NCSoft Corp, all rights reserved.
            </p>
          </div>
          <div className={styles.designerBox}>
            <p className={styles.textDescription}>{layout.design} — UPNOVA</p>
            <img src={polygonIcon} className={styles.arrow} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};
