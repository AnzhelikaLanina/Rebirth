import React from 'react';
import styles from './MainPage.module.css';
import { DiscordSection, Features, TitleSection } from '@/widgets';
import { NewsSection } from '@/widgets/NewsSection';

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
