import '../page.css';
import React from "react";
import Features from "../../components/features/features";
import TitleSection from "../../components/title-section/title-section";
import NewsSection from "../../components/news-section/news-section";
import DiscordSection from "../../components/discord-section/discord-section";
import {Helmet} from "react-helmet-async";

const MainPage = () => {

    return (
        <>
            <Helmet>
                <title>{'Rebirth'}</title>
            </Helmet>
            <div className={"mainPage"}>
                <TitleSection />
                <Features />
                <NewsSection />
                <DiscordSection />
            </div>
        </>
    );
};

export default MainPage;