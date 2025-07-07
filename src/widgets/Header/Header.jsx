import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { PATHS } from '../../shared/lib/constants/paths';
import { ButtonsHeaderSection, DropDown, HeaderMenu, HeaderMenuMobile } from './ui';
import { MenuIcon, OnlineIcon, SmallLogo } from '../../shared/assets/images';
import { MEDIA_BREAKPOINTS } from '../../shared/lib/constants/mediaQueries';

export const Header = () => {
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
            <SmallLogo className={styles.logo} />
          </Link>
          <div className={styles.line} />
          <div className={styles.onlineStatus}>
            <OnlineIcon className={styles.onlineIcon} />
            <div className={styles.description}>
              <p className={styles.textBig}>Online</p>
              <p className={styles.textSmall}>Essence x1</p>
            </div>
          </div>
          {isDesktop && <HeaderMenu />}
        </div>

        {isDesktop ? (
          <div className={styles.boxRight}>
            <DropDown />
            <ButtonsHeaderSection />
          </div>
        ) : (
          <>
            <MenuIcon
              className={styles.iconMenu}
              onClick={toggleMenu}
            />
            <HeaderMenuMobile
              toggleMenu={toggleMenu}
              menuOpen={menuOpen}
            />
          </>
        )}
      </div>
    </header>
  );
};
