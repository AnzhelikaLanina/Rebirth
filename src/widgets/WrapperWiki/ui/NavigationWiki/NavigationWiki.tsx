import React from 'react';
import styles from './NavigationWiki.module.css';
import {
  NavigationItem,
  NavigationItemProps,
  useWikiNavigationItems,
} from '@/shared';

type NavigationWikiProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export const NavigationWiki = ({
  activeIndex,
  setActiveIndex,
}: NavigationWikiProps) => {
  const items = useWikiNavigationItems();

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.content}>
      {items.map((item: NavigationItemProps, index: number) => (
        <React.Fragment key={index}>
          {index > 0 && index < items.length && (
            <div className={styles.boxLine}>
              <div className={styles.line} />
            </div>
          )}
          <NavigationItem
            icon={item.icon}
            header={item.header}
            isActive={activeIndex === index}
            onClick={() => handleItemClick(index)}
            activeIcon={item.activeIcon}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
