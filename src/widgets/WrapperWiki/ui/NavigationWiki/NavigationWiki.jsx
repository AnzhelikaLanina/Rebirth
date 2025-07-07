import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavigationWiki.module.css';
import { NavigationItem } from '../../../../shared/ui';
import { useWikiNavigationItems } from '../../../../shared/lib/hooks';

export const NavigationWiki = ({ activeIndex, setActiveIndex }) => {
  const items = useWikiNavigationItems();

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.content}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && index < items.length && (
            <div className={styles.boxLine}>
              <div className={styles.line} />
            </div>
          )}
          <NavigationItem
            icon={item.icon}
            header={item.text}
            isActive={activeIndex === index}
            onClick={() => handleItemClick(index)}
            activeIcon={item.activeIcon}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

NavigationWiki.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
};
