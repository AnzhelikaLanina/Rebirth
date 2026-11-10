import { Suspense, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WrapperWikiMobile.module.css';
import {
  getWikiSectionPath,
  NavigationItem,
  NavigationItemProps,
  renderWikiComponent,
  scrollToElement,
  Spinner,
  useSectionFromUrl,
  useWikiNavigationItems,
} from '@/shared';

export const WrapperWikiMobile = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const items = useWikiNavigationItems();
  const sectionFromUrl = useSectionFromUrl();
  const navigate = useNavigate();
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleItemClick = (index: number) => {
    const nextIndex = activeIndex === index ? null : index;
    setActiveIndex(nextIndex);
    navigate(getWikiSectionPath(nextIndex), { replace: true });
  };

  useEffect(() => {
    setActiveIndex(sectionFromUrl);
  }, [sectionFromUrl]);

  useEffect(() => {
    if (activeIndex === null) return;

    scrollToElement(itemRefs.current[activeIndex]);
  }, [activeIndex]);

  return (
    <div className={styles.list}>
      {items.map((item: NavigationItemProps, index: number) => (
        <div
          key={index}
          className={styles.item}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
        >
          <NavigationItem
            icon={item.icon}
            header={item.header}
            isActive={activeIndex === index}
            onClick={() => handleItemClick(index)}
            activeIcon={item.activeIcon}
          />
          {activeIndex === index && (
            <Suspense fallback={<Spinner />}>
              <div className={styles.contentAppear}>
                {renderWikiComponent(index)}
              </div>
            </Suspense>
          )}
        </div>
      ))}
    </div>
  );
};
