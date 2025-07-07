import '../page.css';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DiscordSection, Features, TitleSection } from '../../widgets';
import { NewsSection } from '../../widgets/NewsSection';

export const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Rebirth</title>
      </Helmet>
      <div className="mainPage">
        <TitleSection />
        <Features />
        <NewsSection />
        <DiscordSection />
      </div>
    </>
  );
};
