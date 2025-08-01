import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';
import styles from './NavigationItem.module.css';
import { ArrowDownActiveIcon, ArrowDownIcon } from '../../assets/images';
import { MEDIA_BREAKPOINTS } from '@/shared/lib';
import { NavigationItemProps } from '@/shared/types';

export const NavigationItem = ({
  icon,
  header,
  isActive,
  onClick,
  activeIcon,
}: NavigationItemProps) => {
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
