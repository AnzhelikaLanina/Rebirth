import { useMediaQuery } from 'react-responsive';
import styles from './Features.module.css';
import sparksFeaturesLeftEffect from '../../shared/assets/images/effects/sparks-features-left.svg?url';
import sparksFeaturesRightEffect from '../../shared/assets/images/effects/sparks-features-right.svg?url';
import { SwiperInfo } from '@/widgets';
import {
  MEDIA_BREAKPOINTS,
  OrnamentFeaturesFrame,
  OrnamentFeaturesMobileFrame,
  useLocalizedData,
} from '@/shared';

export const Features = () => {
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.DESKTOP_LARGE });
  const { features } = useLocalizedData();

  const Ornament = isDesktop
    ? OrnamentFeaturesFrame
    : OrnamentFeaturesMobileFrame;

  return (
    <section className={styles.features}>
      <h2 className={styles.header}>{features.uniqueFeatures}</h2>
      <img
        src={sparksFeaturesLeftEffect}
        className={styles.sparksLeft}
        alt=""
      />
      <img
        src={sparksFeaturesRightEffect}
        className={styles.sparksRight}
        alt=""
      />
      <div className={styles.patternBox} />
      <div className={styles.ornamentBox}>
        <Ornament className={styles.ornament} />
        <div className={styles.container}>
          <div className={styles.overlay} />
          <div className={styles.box}>
            <SwiperInfo />
          </div>
        </div>
      </div>
    </section>
  );
};
