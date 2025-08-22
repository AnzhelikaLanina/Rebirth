import { useMediaQuery } from 'react-responsive';
import styles from './NewsLarge.module.css';
import { mainInfoWikiRatesData, mapWithLocalization, MEDIA_BREAKPOINTS, useLocalizedData } from '@/shared/lib';
import {
  OrnamentFeaturesMobileFrame,
  OrnamentNewsLargeFrame,
} from '@/shared/assets/images';
import { TableItemProps } from '@/shared/types';

export const NewsLarge = () => {
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.DESKTOP });
  const { newsList } = useLocalizedData();
  const { mainInfoWiki } = newsList;

  const localizedItemsWithoutPremium = mapWithLocalization(
    mainInfoWikiRatesData,
    mainInfoWiki.withoutPremium,
    'text',
  );

  const localizedItemsWithPremium = mapWithLocalization(
    mainInfoWikiRatesData,
    mainInfoWiki.withPremium,
    'text',
  );

  const Ornament = isDesktop
    ? OrnamentNewsLargeFrame
    : OrnamentFeaturesMobileFrame;

  return (
    <div className={styles.ornamentBox}>
      <Ornament className={styles.ornament} />
      <div className={styles.item}>
        <div className={styles.overlay} />
        <div className={styles.containerLarge}>
          <h3 className={styles.headerLarge}>{mainInfoWiki.header}</h3>
          <p className={styles.descriptionLarge}>{mainInfoWiki.updateLabel}</p>
          <p className={styles.descriptionLarge}>{mainInfoWiki.clientLimitLabel}</p>
          <div className={styles.box1}>
            {localizedItemsWithoutPremium.map((item: TableItemProps, index: number) => (
              <div className={styles.box} key={index}>
                {item.header ? '' :
                  <img className={styles.img} src={item.src} alt={item.alt} />
                }
                <p className={styles.descriptionLarge}>{item.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.box1}>
            {localizedItemsWithPremium.map((item: TableItemProps, index: number) => (
              <div className={styles.box} key={index}>
                {item.header ? '' :
                  <img className={styles.img} src={item.src} alt={item.alt} />
                }
                <p className={styles.descriptionLarge}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
