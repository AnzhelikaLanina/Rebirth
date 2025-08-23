import { Suspense, useEffect, useState } from 'react';
import styles from './WrapperWikiMobile.module.css';
import { useWikiNavigationItems, renderWikiComponent, useSectionFromUrl } from '@/shared/lib';
import { NavigationItem, Spinner } from '@/shared/ui';
import { NavigationItemProps } from '@/shared/types';
import { scrollToSection } from '@/shared/lib/helpers/scrollToSection';

export const WrapperWikiMobile = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const items = useWikiNavigationItems();
  const sectionFromUrl = useSectionFromUrl();

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    if (sectionFromUrl !== null) {
      setActiveIndex(sectionFromUrl);
    }
  }, [sectionFromUrl]);

  useEffect(() => {
    if (activeIndex !== null) {
      scrollToSection(activeIndex);
    }
  }, [activeIndex]);

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
            <div className={styles.contentAppear} style={{ display: activeIndex === index ? 'block' : 'none' }}>
              {renderWikiComponent(index)}
            </div>
          </Suspense>
        </div>
      ))}
    </div>
  );
};
