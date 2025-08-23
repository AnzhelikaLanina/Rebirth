import { Suspense, useEffect, useState } from 'react';
import styles from './WrapperWiki.module.css';
import { renderWikiComponent, scrollToTop, useSectionFromUrl } from '@/shared/lib';
import { Spinner } from '@/shared/ui';
import { NavigationWiki } from './ui';
import { scrollToSection } from '@/shared/lib/helpers/scrollToSection';

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
