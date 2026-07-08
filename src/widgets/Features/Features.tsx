import { useMediaQuery } from 'react-responsive';
import styles from './Features.module.css';
import sparksFeaturesLeftEffect from '../../shared/assets/images/effects/sparks-features-left.svg?url';
import sparksFeaturesRightEffect from '../../shared/assets/images/effects/sparks-features-right.svg?url';
import { SwiperInfo } from '@/widgets';
import {
  MEDIA_BREAKPOINTS,
  OrnamentFeaturesFrame,
  OrnamentFeaturesMobileFrame,
  OrnamentSwiperFrame,
} from '@/shared';

export const Features = () => {
  const isDesktopLarge = useMediaQuery({
    query: MEDIA_BREAKPOINTS.DESKTOP_LARGE,
  });
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.MOBILE_SWITCH });

  const Ornament = isDesktopLarge
    ? OrnamentFeaturesFrame
    : isDesktop
      ? OrnamentSwiperFrame
      : OrnamentFeaturesMobileFrame;

  return (
    <section className={styles.features}>
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
        <Ornament
          className={styles.ornament}
          preserveAspectRatio={isDesktop ? 'none' : undefined}
        />
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
