import { Suspense, useState } from 'react';
import styles from './WrapperWiki.module.css';
import { renderWikiComponent } from '@/shared/lib';
import { Spinner } from '@/shared/ui';
import { NavigationWiki } from './ui';

export const WrapperWiki = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
