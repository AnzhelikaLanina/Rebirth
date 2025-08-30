import { Suspense, useEffect, useState } from 'react';
import styles from './WrapperWiki.module.css';
import { NavigationWiki } from './ui';
import {
  renderWikiComponent,
  scrollToSection,
  scrollToTop,
  Spinner,
  useSectionFromUrl
} from '@/shared';

export const WrapperWiki = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionFromUrl = useSectionFromUrl();

  useEffect(() => {
    if (sectionFromUrl !== null) {
      setActiveIndex(sectionFromUrl);
    }
  }, [sectionFromUrl]);

  useEffect(() => {
    scrollToSection(activeIndex);
    scrollToTop();
  }, [activeIndex]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.navWrapper}>
        <NavigationWiki
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
      <Suspense fallback={<Spinner />}>
        <div className={styles.contentAppear}>
          {renderWikiComponent(activeIndex)}
        </div>
      </Suspense>
    </div>
  );
};
