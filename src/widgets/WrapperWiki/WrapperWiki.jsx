import { Suspense, useState } from 'react';
import styles from './WrapperWiki.module.css';
import { NavigationWiki } from './ui/NavigationWiki';
import { renderWikiComponent } from '../../shared/lib/helpers/renderWikiContent';

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
      <Suspense fallback={null}>
        <div className={styles.contentAppear}>
          {renderWikiComponent(activeIndex)}
        </div>
      </Suspense>
    </div>

  );
};
