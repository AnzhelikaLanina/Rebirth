import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import styles from './NewsList.module.css';
import { NewsItem } from '../NewsItem';
import {
  MEDIA_BREAKPOINTS,
  OrnamentNewsSmallFrame,
  OrnamentNewsSmallMobileFrame,
  useLocalizedData,
} from '@/shared';

export const NewsList = () => {
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.DESKTOP });
  const { newsList } = useLocalizedData();
  const { bonusesForClans, rewardsSeasonPass, newUniqueTasks } = newsList;
  const navigate = useNavigate();

  const newsData = [
    {
      ...bonusesForClans,
      style: styles.itemTop,
      sectionId: 20,
    },
    {
      ...rewardsSeasonPass,
      style: styles.itemCenter,
      sectionId: 4,
    },
    {
      ...newUniqueTasks,
      style: styles.itemBottom,
      sectionId: 3,
    },
  ];

  const Ornament = isDesktop
    ? OrnamentNewsSmallFrame
    : OrnamentNewsSmallMobileFrame;

  const handleClick = (sectionId: number) => {
    navigate(`/wiki?section=${sectionId}`);
  };

  return (
    <>
      {newsData.map((newsItem, index) => (
        <div
          className={styles.ornamentBox}
          key={index}
          onClick={() => handleClick(newsItem.sectionId)}
        >
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
