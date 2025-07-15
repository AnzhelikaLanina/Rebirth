import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './DiscordSection.module.css';
import { DiscordBlock } from '@/widgets';
import {
  OrnamentDiscordFrame,
  OrnamentDiscordMobileFrame,
} from '@/shared/assets/images';
import { MEDIA_BREAKPOINTS } from '@/shared/lib/constants/mediaQueries';

export const DiscordSection = () => {
  const isDesktop = useMediaQuery({ query: MEDIA_BREAKPOINTS.DESKTOP_SMALL });
  const Ornament = isDesktop
    ? OrnamentDiscordFrame
    : OrnamentDiscordMobileFrame;

  return (
    <section className={styles.discord}>
      <div className={styles.ornamentBox}>
        <Ornament className={styles.ornament} />
        <DiscordBlock />
      </div>
      <div className={styles.widget} />
    </section>
  );
};
