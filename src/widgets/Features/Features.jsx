import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './Features.module.css';
import { SwiperInfo } from '../SwiperInfo';
import { useLocalizedData } from '../../shared/lib/hooks';
import {
  OrnamentFeaturesFrame,
  OrnamentFeaturesMobileFrame,
  SparksFeaturesLeftEffect,
  SparksFeaturesRightEffect,
} from '../../shared/assets/images';
import { MEDIA_BREAKPOINTS } from '../../shared/lib/constants/mediaQueries';

export const Features = () => {
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.DESKTOP_LARGE });
  const { features } = useLocalizedData();
  const Ornament = isDesktop ? OrnamentFeaturesFrame : OrnamentFeaturesMobileFrame;

  return (
    <section className={styles.features}>
      <h2 className={styles.header}>{features.uniqueFeatures}</h2>
      <SparksFeaturesLeftEffect className={styles.sparksLeft} />
      <SparksFeaturesRightEffect className={styles.sparksRight} />
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
