import { useNavigate } from 'react-router-dom';
import { wikiNavData } from '../../lib/constants/wiki/wikiNavData';
import styles from './WikiSectionLink.module.css';

type WikiSectionLinkProps = {
  label: string;
  wikiKey: string;
};

export const WikiSectionLink = ({ label, wikiKey }: WikiSectionLinkProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const index = wikiNavData.findIndex((nav) => nav.key === wikiKey);
    if (index >= 0) {
      navigate(`/wiki?section=${index}`);
    }
  };

  return (
    <button type="button" className={styles.link} onClick={handleClick}>
      {label}
    </button>
  );
};
