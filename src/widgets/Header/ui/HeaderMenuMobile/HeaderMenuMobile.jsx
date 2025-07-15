import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './HeaderMenuMobile.module.css';
import { useLocalizedData } from '@/shared/lib/hooks';
import { PATHS } from '@/shared/lib/constants/paths';
import { ButtonsHeaderSection } from '@/widgets';
import { DropDown } from '@/widgets';
import { CloseIcon } from '@/shared/assets/images';
import { EXTERNAL_LINKS } from '@/shared/lib/constants/externalLinks';
import { ExternalLink } from '@/shared/ui';

export const HeaderMenuMobile = ({ toggleMenu, menuOpen }) => {
  const { layout } = useLocalizedData();

  const handleNavClick = (e) => {
    const link = e.target.closest('a, button');
    if (link) toggleMenu();
  };

  return (
    <nav className={`${styles.nav} ${menuOpen && styles.open}`}>
      <CloseIcon onClick={toggleMenu} className={styles.closeIcon} />
      <div className={styles.box} onClick={handleNavClick}>
        <Link className={styles.link} to={PATHS.WIKI}>
          {layout.server}
        </Link>
        <ExternalLink
          href={EXTERNAL_LINKS.DISCORD}
          children={layout.files}
          className={styles.link}
        />
        <ExternalLink
          href={EXTERNAL_LINKS.REGISTRATION}
          children={layout.registration}
          className={styles.link}
        />
        <ButtonsHeaderSection />
        <DropDown onLanguageChange={toggleMenu} />
      </div>
    </nav>
  );
};

HeaderMenuMobile.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};
