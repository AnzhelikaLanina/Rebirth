import { Link } from 'react-router-dom';
import styles from './HeaderMenu.module.css';
import {
  EXTERNAL_LINKS,
  ExternalLink,
  OpenModal,
  PATHS,
  useLocalizedData,
} from '@/shared';

export const HeaderMenu = ({ onOpenModal }: OpenModal) => {
  const { layout } = useLocalizedData();
  return (
    <>
      <div className={styles.line} />
      <nav className={styles.nav}>
        <div className={styles.element}>
          <Link to={PATHS.WIKI} className={styles.link}>
            {layout.server}
          </Link>
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
