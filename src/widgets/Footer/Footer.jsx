import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { PATHS } from '@/shared/lib/constants/paths';
import { useLocalizedData } from '@/shared/lib/hooks';
import nameAndLogo from '../../shared/assets/images/logos/logo-name.svg?/url';
import polygonIcon from '../../shared/assets/images/icons/polygon.svg?/url';
import { EXTERNAL_LINKS } from '@/shared/lib/constants/externalLinks';
import { ExternalLink } from '@/shared/ui';

export const Footer = () => {
  const { layout } = useLocalizedData();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.info}>
          <li className={styles.box}>
            <img src={nameAndLogo} className={styles.logo} />
            <div className={styles.line} />
            <p className={styles.text}>Lineage 2 Essence x1 Server</p>
          </li>
          <li>
            <ExternalLink
              href={EXTERNAL_LINKS.USER_AGREEMENT}
              children={layout.userAgreement}
              className={styles.link}
            />
          </li>
          <li>
            <ExternalLink
              href={EXTERNAL_LINKS.PRIVACY_POLICY}
              children={layout.privacyPolicy}
              className={styles.link}
            />
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
          <p className={styles.textDescription}>
            Copyright &copy; 2025, Rebirth. Lineage is a trademark owned by
            NCSoft Corp, all rights reserved.
          </p>
          <div className={styles.designerBox}>
            <p className={styles.textDescription}>{layout.design} — UPNOVA</p>
            <img src={polygonIcon} className={styles.arrow} />
          </div>
        </div>
      </div>
    </footer>
  );
};
