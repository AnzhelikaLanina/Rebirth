import styles from './HeaderMenu.module.css';
import {
  EXTERNAL_LINKS,
  ExternalLink,
  OpenModal,
  PATHS,
  useLocalizedData,
  useSmartNavigation,
} from '@/shared';

export const HeaderMenu = ({ onOpenModal }: OpenModal) => {
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
          <p className={styles.link} onClick={onOpenModal}>
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
      </nav>
    </>
  );
};
