import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { PATHS, MEDIA_BREAKPOINTS, useLocalizedData } from '@/shared/lib';
import { MenuIcon } from '@/shared/assets/images';
import {
  ButtonsHeaderSection,
  DropDown,
  HeaderMenu,
  HeaderMenuMobile,
} from './ui';
import smallLogo from '../../shared/assets/images/logos/logo-small.svg?url';
import onlineIcon from '../../shared/assets/images/icons/online-icon.svg?url';
import { OpenModal } from '@/shared/types';

export const Header = ({ onOpenModal }: OpenModal) => {
  const { layout } = useLocalizedData();
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.DESKTOP_XL });
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.box}>
          <Link to={PATHS.HOME}>
            <img src={smallLogo} className={styles.logo} alt={layout.altLogo} />
          </Link>
          <div className={styles.line} />
          <div className={styles.onlineStatus}>
            <img
              src={onlineIcon}
              className={styles.onlineIcon}
              alt={layout.altOnlineIcon}
            />
            <div className={styles.description}>
              <p className={styles.textBig}>Online</p>
              <p className={styles.textSmall}>Essence x5</p>
            </div>
          </div>
          {isDesktop && <HeaderMenu onOpenModal={onOpenModal} />}
        </div>

        {isDesktop ? (
          <div className={styles.boxRight}>
            <DropDown />
            <ButtonsHeaderSection />
          </div>
        ) : (
          <>
            <MenuIcon className={styles.iconMenu} onClick={toggleMenu} />
            <HeaderMenuMobile
              toggleMenu={toggleMenu}
              menuOpen={menuOpen}
              onOpenModal={onOpenModal}
            />
          </>
        )}
      </div>
    </header>
  );
};
