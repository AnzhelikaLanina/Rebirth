import styles from './MainPage.module.css';
import {
  DiscordSection,
  Features,
  TitleSection,
  NewsSection
} from '@/widgets';

export const MainPage = () => {
  return (
    <>
      <div className={styles.page}>
        <TitleSection />
        <Features />
        <NewsSection />
        <DiscordSection />
      </div>
    </>
  );
};
