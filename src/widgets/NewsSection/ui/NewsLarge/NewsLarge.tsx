import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import styles from './NewsLarge.module.css';
import {
  mainInfoWikiRatesData,
  mapWithLocalization,
  MEDIA_BREAKPOINTS,
  OrnamentFeaturesMobileFrame,
  OrnamentNewsLargeFrame,
  TableItemProps,
  useLocalizedData,
} from '@/shared';

export const NewsLarge = () => {
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.DESKTOP });
  const { newsList } = useLocalizedData();
  const { mainInfoWiki } = newsList;
  const navigate = useNavigate();

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
    <div
      className={styles.ornamentBox}
      onClick={() => navigate('/wiki?section=0')}
    >
      <Ornament className={styles.ornament} />
      <div className={styles.item}>
        <div className={styles.overlay} />
        <div className={styles.container}>
          <h3 className={styles.header}>{mainInfoWiki.header}</h3>
          <p className={styles.description}>{mainInfoWiki.updateLabel}</p>
          <p className={styles.description}>{mainInfoWiki.clientLimitLabel}</p>
          <div className={styles.boxItems}>
            {localizedItemsWithoutPremium.map(
              (item: TableItemProps, index: number) => (
                <div className={styles.box} key={index}>
                  {item.header ? (
                    ''
                  ) : (
                    <img className={styles.img} src={item.src} alt={item.alt} />
                  )}
                  <p className={styles.description}>{item.text}</p>
                </div>
              ),
            )}
          </div>
          <div className={styles.box1}>
            {localizedItemsWithPremium.map(
              (item: TableItemProps, index: number) => (
                <div className={styles.box} key={index}>
                  {item.header ? (
                    ''
                  ) : (
                    <img className={styles.img} src={item.src} alt={item.alt} />
                  )}
                  <p className={styles.description}>{item.text}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
