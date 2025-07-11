import '../page.css';
import React from 'react';
import { DiscordSection, Features, TitleSection } from '@/widgets';
import { NewsSection } from '@/widgets/NewsSection';

export const MainPage = () => {
  return (
    <>
      <div className="mainPage">
        <TitleSection />
        <Features />
        <NewsSection />
        <DiscordSection />
      </div>
    </>
  );
};
