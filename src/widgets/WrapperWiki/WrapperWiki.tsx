import { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WrapperWiki.module.css';
import { NavigationWiki } from './ui';
import {
  getWikiSectionPath,
  renderWikiComponent,
  scrollToTop,
  Spinner,
  useSectionFromUrl,
} from '@/shared';

export const WrapperWiki = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionFromUrl = useSectionFromUrl();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveIndex(sectionFromUrl ?? 0);
  }, [sectionFromUrl]);

  useEffect(() => {
    scrollToTop();
  }, [activeIndex]);

  const handleSectionSelect = (index: number) => {
    setActiveIndex(index);
    navigate(getWikiSectionPath(index), { replace: true });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navWrapper}>
        <NavigationWiki
          activeIndex={activeIndex}
          setActiveIndex={handleSectionSelect}
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
