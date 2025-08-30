import { useMediaQuery } from 'react-responsive';
import styles from './DiscordSection.module.css';
import { DiscordBlock } from '@/widgets';
import {
  MEDIA_BREAKPOINTS,
  OrnamentDiscordFrame,
  OrnamentDiscordMobileFrame
} from '@/shared';

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
    </section>
  );
};
