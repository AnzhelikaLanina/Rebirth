import styles from './ServerInfo.module.css';
import sparksNewsTopEffect from '../../shared/assets/images/effects/sparks-news-top.svg?url';
import sparksNewsBottomEffect from '../../shared/assets/images/effects/sparks-news-bottom.svg?url';
import { MainInfoCard } from './ui';
import { DiscordSection } from '../DiscordSection';

export const ServerInfo = () => {
  return (
    <section className={styles.news}>
      <img src={sparksNewsTopEffect} className={styles.sparksTop} alt="" />
      <img
        src={sparksNewsBottomEffect}
        className={styles.sparksBottom}
        alt=""
      />
      <div className={styles.patternBox} />
      <div className={styles.container}>
        <MainInfoCard />
        <DiscordSection />
      </div>
    </section>
  );
};
