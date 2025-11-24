import type { MouseEvent as ReactMouseEvent } from 'react';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';
import styles from './HeaderMenuMobile.module.css';
import { ButtonsHeaderSection, DropDown } from '@/widgets';
import {
  ButtonClose,
  EXTERNAL_LINKS,
  ExternalLink,
  MEDIA_BREAKPOINTS,
  OpenModal,
  PATHS,
  useLocalizedData,
  useSmartNavigation,
} from '@/shared';

type HeaderMenuMobileProps = OpenModal & {
  toggleMenu: () => void;
  menuOpen: boolean;
};

export const HeaderMenuMobile = ({
  toggleMenu,
  menuOpen,
  onOpenModal,
}: HeaderMenuMobileProps) => {
  const { layout } = useLocalizedData();
  const { handleNavClick } = useSmartNavigation();
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.DESKTOP_MEDIUM });

  const handleNavClickClose = (e: ReactMouseEvent<HTMLDivElement>) => {
    const link = (e.target as HTMLElement).closest('a, button');
    if (link) toggleMenu();
  };

  return (
    <nav className={clsx(styles.nav, menuOpen && styles.open)}>
      <ButtonClose onClose={toggleMenu} />
      <div className={styles.box} onClick={handleNavClickClose}>
        <a
          className={styles.link}
          href={PATHS.WIKI}
          onClick={handleNavClick(PATHS.WIKI)}
        >
          {layout.server}
        </a>
        {isDesktop && (
          <p className={styles.link} onClick={onOpenModal}>
            {layout.files}
          </p>
        )}
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
