import React, { Suspense, useState } from 'react';
import styles from './WrapperWikiMobile.module.css';
import { useWikiNavigationItems } from '../../shared/lib/hooks';
import { NavigationItem } from '../../shared/ui';
import { renderWikiComponent } from '../../shared/lib/helpers/renderWikiContent';

export const WrapperWikiMobile = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const items = useWikiNavigationItems();

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <NavigationItem
            icon={item.icon}
            header={item.text}
            isActive={activeIndex === index}
            onClick={() => handleItemClick(index)}
            activeIcon={item.activeIcon}
          />
          <Suspense fallback={null}>
            {activeIndex === index && renderWikiComponent(activeIndex)}
          </Suspense>
        </div>
      ))}
    </div>
  );
};
