import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import styles from './NavigationItem.module.css';
import {
  ArrowDownActiveIcon,
  ArrowDownIcon,
} from '../../../shared/assets/images';
import clsx from 'clsx';
import { MEDIA_BREAKPOINTS } from '../../lib/constants/mediaQueries';

export const NavigationItem = ({
  icon,
  header,
  isActive,
  onClick,
  activeIcon,
}) => {
  const isDesktop = useMediaQuery({
    query: MEDIA_BREAKPOINTS.DESKTOP_MAX_WIDTH,
  });
  const Arrow = isActive ? ArrowDownActiveIcon : ArrowDownIcon;
  const Item = isActive ? activeIcon : icon;

  return (
    <div className={styles.item} onClick={onClick}>
      <Item className={styles.icon} />
      <h2 className={clsx(styles.text, isActive && styles.textActive)}>
        {header}
      </h2>
      {isDesktop && (
        <Arrow className={clsx(styles.arrow, isActive && styles.rotate)} />
      )}
    </div>
  );
};

NavigationItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  header: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  activeIcon: PropTypes.elementType.isRequired,
};
