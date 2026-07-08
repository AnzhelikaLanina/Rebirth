import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './Header.module.css';
import smallLogo from '../../shared/assets/images/logos/logo-small.svg?url';
import onlineIcon from '../../shared/assets/images/icons/online-icon.svg?url';
import {
  ButtonsHeaderSection,
  DropDown,
  HeaderMenu,
  HeaderMenuMobile,
} from './ui';
import {
  DATES,
  GENERAL,
  MEDIA_BREAKPOINTS,
  MenuIcon,
  HeaderProps,
  PATHS,
  useLocalizedData,
  useSmartNavigation,
} from '@/shared';

export const Header = ({ onOpenModal,}: HeaderProps) => {
  const { layout } = useLocalizedData();
  const { handleNavClick } = useSmartNavigation();
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.HEADER_DESKTOP });
  const [menuOpen, setMenuOpen] = useState(false);

  const date2025 = new Date(DATES.SERVER_2025);
  const dateNewSeason = new Date(DATES.SERVER_2026_SEP);
  const formatDate = (d: Date) => {
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const formattedDateLeft = formatDate(date2025);
  const formattedDateRight = formatDate(dateNewSeason);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.box}>
          <a
            href={PATHS.HOME}
            onClick={handleNavClick(PATHS.HOME)}
          >
            <img src={smallLogo} className={styles.logo} alt={layout.altLogo} />
          </a>
          <div className={styles.line} />
          <div className={styles.onlineStatus}>
            <img
              src={onlineIcon}
              className={styles.onlineIcon}
              alt={layout.altOnlineIcon}
            />
            <div className={styles.description}>
              <p className={styles.textBig}>Online</p>
              <p className={`${styles.textSmall} ${styles.textSmallRate}`}>
                Essence {GENERAL.RATE_5}
              </p>
              <p className={styles.textSmall}>{formattedDateLeft}</p>
            </div>
          </div>
          <div className={`${styles.line} ${styles.lineSecondary}`} />
          <div className={`${styles.onlineStatus} ${styles.onlineStatusSecondary}`}>
            <img
              src={onlineIcon}
              className={styles.onlineIcon}
              alt={layout.altOnlineIcon}
            />
            <div className={styles.description}>
              <p className={styles.textBig}>Online</p>
              <p className={`${styles.textSmall} ${styles.textSmallRate}`}>
                Essence {GENERAL.RATE_5}
              </p>
              <p className={styles.textSmall}>{formattedDateRight}</p>
            </div>
          </div>
          {isDesktop &&
            <HeaderMenu onOpenModal={onOpenModal} />}
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
