import Features from "../../components/features/features";
import TitleSection from "../../components/title-section/title-section";
import NewsSection from "../../components/news-section/news-section";
import DiscordSection from "../../components/discord-section/discord-section";

const MainPage = () => {
    return (
        <>
            <TitleSection />
            <Features />
            <NewsSection />
            <DiscordSection />
        </>
    )
}

export default MainPage;