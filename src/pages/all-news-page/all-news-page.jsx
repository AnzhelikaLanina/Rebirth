import "../page.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import styles from "./all-news-page.module.css";
import ButtonShowMore from "../../components/button-show-more/button-show-more";
import NewsLarge from "../../components/news-large/news-large";
import NewsSmall from "../../components/news-small/news-small";
import Tags from "../../components/tags/tags";
import data from "../../data/newsList.json";
import sparksTopImage from "../../images/sparks-news-top.svg";
import sparksBottomImage from "../../images/sparks-news-bottom.svg";
import {Helmet} from "react-helmet-async";

const AllNewsPage = () => {
    const navigate = useNavigate();

    const handleNewsClick = (id) => {
        navigate(`/news/${id}`);
    };

    const [selectedTag, setSelectedTag] = useState('Все');
    const [newsCount, setNewsCount] = useState(8);
    const sortedNewsList = data.newsList.sort((a, b) => moment(b.date, "DD.MM.YYYY HH:mm") - moment(a.date, "DD.MM.YYYY HH:mm"));
    const latestMainNews = sortedNewsList.find(news => news.isMain);
    const filteredNewsList = sortedNewsList.filter(news => news.id !== latestMainNews?.id);

    const filteredByTag = selectedTag && selectedTag !== 'Все'
        ? filteredNewsList.filter(news => news.tag === selectedTag)
        : filteredNewsList;

    const newsToDisplay = filteredByTag.slice(0, newsCount);

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
        setNewsCount(8);
    };

    const handleShowMore = () => {
        setNewsCount((prevCount) => prevCount + 8);
    };

    return (
        <>
            <Helmet>
                <title>{'Все новости Rebirth'}</title>
            </Helmet>
            <div className={"main"}>
                <img
                    src={sparksTopImage}
                    className={styles.sparksTop}
                    alt={'рыжие огоньки'}
                />
                <img
                    src={sparksBottomImage}
                    className={styles.sparksBottom}
                    alt={'рыжие огоньки'}
                />
                <div className={styles.patternBox}></div>
                <div className={styles.headerBox}>
                    <h1 className={styles.header}>Последние новости</h1>
                    <Tags onTagClick={handleTagClick} selectedTag={selectedTag}/>
                </div>
                <div className={styles.news}>
                    <NewsLarge isWide={true} onClick={() => handleNewsClick(latestMainNews.id)}/>
                    <div className={styles.newsList}>
                        {newsToDisplay.length > 0 ? (
                            newsToDisplay.map((news) => (
                                <NewsSmall
                                    key={news.id}
                                    news={news}
                                    itemStyle={styles.item}
                                    headerStyle={styles.headerItem}
                                    descriptionStyle={styles.descriptionItem}
                                    onClick={() => handleNewsClick(news.id)}
                                    isSmall={true}
                                />
                            ))
                        ) : (
                            <p>Нет новостей по выбранному тегу.</p>
                        )}
                    </div>
                </div>
                {newsToDisplay.length < filteredByTag.length && (
                    <ButtonShowMore onClick={handleShowMore}/>
                )}
            </div>
        </>
    )
};

export default AllNewsPage;