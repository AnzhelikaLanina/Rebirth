import '../page.css';
import { useEffect, useState } from "react";
import Features from "../../components/features/features";
import TitleSection from "../../components/title-section/title-section";
import NewsSection from "../../components/news-section/news-section";
import DiscordSection from "../../components/discord-section/discord-section";
import NavigationMainPage from "../../components/navigation-main-page/navigation-main-page";

const MainPage = () => {
    const [activeSection, setActiveSection] = useState('title');
    const [isManualNavigation, setIsManualNavigation] = useState(false);

    const handleScroll = (section) => {
        setIsManualNavigation(true);
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        setActiveSection(section);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        let lastActiveSection = 'title';

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isManualNavigation) {
                    if (entry.target.id !== lastActiveSection) {
                        lastActiveSection = entry.target.id;
                        setActiveSection(lastActiveSection);
                    }
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, [isManualNavigation]);

    useEffect(() => {
        if (isManualNavigation) {
            const timer = setTimeout(() => setIsManualNavigation(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [isManualNavigation]);

    return (
        <div className={"mainPage"}>
            <NavigationMainPage activeSection={activeSection} onNavigate={handleScroll} />
            <TitleSection id="title" />
            <Features id="features" />
            <NewsSection id="news" />
            <DiscordSection id="discord" />
        </div>
    );
};

export default MainPage;