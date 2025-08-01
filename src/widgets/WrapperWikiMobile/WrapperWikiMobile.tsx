import { Suspense, useState } from 'react';
import styles from './WrapperWikiMobile.module.css';
import { useWikiNavigationItems, renderWikiComponent } from '@/shared/lib';
import { NavigationItem, Spinner } from '@/shared/ui';
import { NavigationItemProps } from '@/shared/types';

export const WrapperWikiMobile = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const items = useWikiNavigationItems();

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className={styles.list}>
      {items.map((item: NavigationItemProps, index: number) => (
        <div key={index} className={styles.item}>
          <NavigationItem
            icon={item.icon}
            header={item.header}
            isActive={activeIndex === index}
            onClick={() => handleItemClick(index)}
            activeIcon={item.activeIcon}
          />
          <Suspense fallback={<Spinner />}>
            <div className={styles.contentAppear}>
              {activeIndex === index && renderWikiComponent(activeIndex)}
            </div>
          </Suspense>
        </div>
      ))}
    </div>
  );
};
