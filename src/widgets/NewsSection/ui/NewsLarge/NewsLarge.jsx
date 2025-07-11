import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './NewsLarge.module.css';
import data from '../../../../shared/assets/locales/newsList.json';
import { NewsItem } from '../NewsItem';
import { OrnamentFeaturesMobileFrame, OrnamentNewsLargeFrame } from '@/shared/assets/images';
import { MEDIA_BREAKPOINTS } from '@/shared/lib/constants/mediaQueries';

export const NewsLarge = () => {
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.DESKTOP });
  const Ornament = isDesktop ? OrnamentNewsLargeFrame : OrnamentFeaturesMobileFrame;
  const mainNews = data.newsList.slice(0, 1);

  return (
    <div className={styles.ornamentBox}>
      <Ornament className={styles.ornament} />
      {mainNews.map((news) => (
        <NewsItem
          key={news.id}
          headerText={news.header}
          descriptionText={news.description}
        />
      ))}
    </div>
  );
};
