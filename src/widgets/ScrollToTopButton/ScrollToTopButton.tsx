import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './ScrollToTopButton.module.css';
import { scrollToTop, useLocalizedData } from '@/shared/lib';
import ArrowTopIcon from '@/shared/assets/images/icons/arrow-top.png';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { buttonToTop } = useLocalizedData();

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 200);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={clsx(
        styles.scrollButton,
        isVisible && styles.scrollButtonVisible,
      )}
      onClick={scrollToTop}
      aria-label={buttonToTop.backToTop}
    >
      <img src={ArrowTopIcon} alt="" className={styles.img} />
      <span>{buttonToTop.backToTop}</span>
    </button>
  );
};
