import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './ScrollToTopButton.module.css';
import { useLocalizedData } from '@/shared/lib';
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={clsx(
        styles.scrollButton,
        isVisible && styles.scrollButtonVisible,
      )}
      onClick={scrollToTop}
    >
      <img src={ArrowTopIcon} alt="Arrow Top" className={styles.img} />
      <span>{buttonToTop.backToTop}</span>
    </div>
  );
};
