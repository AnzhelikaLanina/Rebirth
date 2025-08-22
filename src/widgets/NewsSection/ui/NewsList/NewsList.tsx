import { useMediaQuery } from 'react-responsive';
import styles from './NewsList.module.css';
import { MEDIA_BREAKPOINTS, useLocalizedData } from '@/shared/lib';
import {
  OrnamentNewsSmallFrame,
  OrnamentNewsSmallMobileFrame,
} from '@/shared/assets/images';
import { NewsItem } from '../NewsItem';

export const NewsList = () => {
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.DESKTOP });
  const { newsList } = useLocalizedData();
  const { bonusesForClans, rewardsSeasonPass, newUniqueTasks } = newsList;

  const newsData = [
    {
      ...bonusesForClans,
      style: styles.itemTop,
    },
    {
      ...rewardsSeasonPass,
      style: styles.itemCenter,
    },
    {
      ...newUniqueTasks,
      style: styles.itemBottom,
    },
  ];

  const Ornament = isDesktop
    ? OrnamentNewsSmallFrame
    : OrnamentNewsSmallMobileFrame;

  return (
    <>
      {newsData.map((newsItem, index) => (
        <div className={styles.ornamentBox} key={index}>
          <Ornament className={styles.ornament} />
          <NewsItem
            headerText={newsItem.header}
            descriptionText={newsItem.description}
            itemStyle={newsItem.style}
          />
        </div>
      ))}
    </>
  );
};
