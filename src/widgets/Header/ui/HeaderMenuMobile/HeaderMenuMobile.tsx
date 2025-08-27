import type { MouseEvent as ReactMouseEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderMenuMobile.module.css';
import { PATHS, EXTERNAL_LINKS, useLocalizedData, MEDIA_BREAKPOINTS } from '@/shared/lib';
import { ButtonsHeaderSection, DropDown } from '@/widgets';
import { ButtonClose, ExternalLink } from '@/shared/ui';
import { useMediaQuery } from 'react-responsive';
import { OpenModal } from '@/shared/types';

type HeaderMenuMobileProps = OpenModal &{
  toggleMenu: () => void;
  menuOpen: boolean;
};

export const HeaderMenuMobile = ({
  toggleMenu,
  menuOpen,
  onOpenModal
}: HeaderMenuMobileProps) => {
  const { layout } = useLocalizedData();
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.DESKTOP_MEDIUM });

  const handleNavClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    const link = (e.target as HTMLElement).closest('a, button');
    if (link) toggleMenu();
  };

  return (
    <nav className={`${styles.nav} ${menuOpen && styles.open}`}>
      <ButtonClose onClose={toggleMenu} />
      <div className={styles.box} onClick={handleNavClick}>
        <Link className={styles.link} to={PATHS.WIKI}>
          {layout.server}
        </Link>
        {isDesktop &&
          <p className={styles.link} onClick={onOpenModal}>
            {layout.files}
          </p>
        }
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
