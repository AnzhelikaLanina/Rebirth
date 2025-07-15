import React from 'react';
import styles from './NewsList.module.css';
import data from '../../../../shared/assets/locales/newsList.json';
import { useMediaQuery } from 'react-responsive';
import {
  OrnamentNewsSmallFrame,
  OrnamentNewsSmallMobileFrame,
} from '@/shared/assets/images';
import { NewsItem } from '../NewsItem';
import { MEDIA_BREAKPOINTS } from '@/shared/lib/constants/mediaQueries';

export const NewsList = () => {
  const sortedNewsList = data.newsList.slice(1, 4);
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.DESKTOP });

  const Ornament = isDesktop
    ? OrnamentNewsSmallFrame
    : OrnamentNewsSmallMobileFrame;

  const getItemStyle = (index) => {
    switch (index) {
      case 0:
        return styles.itemTop;
      case 1:
        return styles.itemCenter;
      case 2:
        return styles.itemBottom;
      default:
        return '';
    }
  };

  return (
    <>
      {sortedNewsList.map((news, index) => (
        <div className={styles.ornamentBox} key={news.id}>
          <Ornament className={styles.ornament} />
          <NewsItem
            headerText={news.header}
            descriptionText={news.description}
            itemStyle={getItemStyle(index)}
            size={'small'}
          />
        </div>
      ))}
    </>
  );
};
