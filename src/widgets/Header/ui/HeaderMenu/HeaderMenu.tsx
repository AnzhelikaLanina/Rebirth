import styles from './HeaderMenu.module.css';
import {
  EXTERNAL_LINKS,
  ExternalLink,
  HeaderProps,
  MODALS,
  PATHS,
  useLocalizedData,
  useSmartNavigation,
} from '@/shared';

export const HeaderMenu = ({
   onOpenModal
}: HeaderProps) => {
  const { layout } = useLocalizedData();
  const { handleNavClick } = useSmartNavigation();
  return (
    <>
      <div className={styles.line} />
      <nav className={styles.nav}>
        <div className={styles.element}>
          <a
            href={PATHS.WIKI}
            className={styles.link}
            onClick={handleNavClick(PATHS.WIKI)}
          >
            {layout.server}
          </a>
        </div>
        <div className={styles.element}>
          <p
            className={styles.link}
            onClick={() => onOpenModal(MODALS.DOWNLOAD)}
          >
            {layout.files}
          </p>
        </div>
        <div className={styles.element}>
          <ExternalLink
            href={EXTERNAL_LINKS.REGISTRATION}
            children={layout.registration}
            className={styles.link}
          />
        </div>
        <div className={styles.element}>
          <p
            className={styles.link}
            onClick={() => onOpenModal(MODALS.PROMO_CODE)}
          >
            {layout.promoCode}
          </p>
        </div>
      </nav>
    </>
  );
};
