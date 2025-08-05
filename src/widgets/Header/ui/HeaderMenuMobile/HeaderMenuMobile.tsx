import type { MouseEvent as ReactMouseEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderMenuMobile.module.css';
import { PATHS, EXTERNAL_LINKS, useLocalizedData } from '@/shared/lib';
import { ButtonsHeaderSection, DropDown } from '@/widgets';
import { CloseIcon } from '@/shared/assets/images';
import { ExternalLink } from '@/shared/ui';

type HeaderMenuMobileProps = {
  toggleMenu: () => void;
  menuOpen: boolean;
};

export const HeaderMenuMobile = ({
  toggleMenu,
  menuOpen,
}: HeaderMenuMobileProps) => {
  const { layout } = useLocalizedData();

  const handleNavClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    const link = (e.target as HTMLElement).closest('a, button');
    if (link) toggleMenu();
  };

  return (
    <nav className={`${styles.nav} ${menuOpen && styles.open}`}>
      <button
        className={styles.buttonClose}
        onClick={toggleMenu}
        aria-label="Закрыть меню"
      >
        <CloseIcon className={styles.closeIcon} />
      </button>
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
