import Tags from "../../components/tags/tags";
import styles from "./all-news-page.module.css";
import ButtonShowMore from "../../components/button-show-more/button-show-more";
import "../page.css";
import NewsLarge from "../../components/news-large/news-large";
import data from "../../data/newsList.json";
import moment from "moment";
import {useState} from "react";
import lineHorizontal from "../../images/line-horizontal-middle.svg";
import lineVertical from "../../images/line-vertical-short.svg";
import lineThickVertical from "../../images/line-vertical-space-short.svg";
import NewsSmall from "../../components/news-small/news-small";
import {useNavigate} from "react-router-dom";

const AllNewsPage = () => {
    const navigate = useNavigate();

    const handleNewsClick = (id) => {
        navigate(`/news/${id}`);
    };
    const [selectedTag, setSelectedTag] = useState('Все');
    const [newsCount, setNewsCount] = useState(8);

    const lineImages = {
        horizontalTop: lineHorizontal,
        horizontalBottom: lineHorizontal,
        verticalLeft: lineVertical,
        verticalRight: lineVertical,
        thickVerticalLeft: lineThickVertical,
        thickVerticalRight: lineThickVertical
    };

    const imgStyles = {
        cornerRightTop: styles.topRight,
        cornerLeftTop: styles.topLeft,
        cornerRightBottom: styles.bottomRight,
        cornerLeftBottom: styles.bottomLeft,
        horizontalTop: styles.horizontalTop,
        horizontalBottom: styles.horizontalBottom,
        verticalRight: styles.verticalRight,
        verticalLeft: styles.verticalLeft,
        thickVerticalLeft: styles.verticalSpaceLeft,
        thickVerticalRight: styles.verticalSpaceRight
    };

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
        <div className={"main"}>
            <div className={styles.headerBox}>
                <h1 className={styles.header}>Последние новости</h1>
                <Tags onTagClick={handleTagClick} selectedTag={selectedTag} />
            </div>
            <div className={styles.news}>
                <NewsLarge isWide={true} onClick={() => handleNewsClick(latestMainNews.id)}/>
                <div className={styles.newsList}>
                    {newsToDisplay.length > 0 ? (
                        newsToDisplay.map((news, index) => (
                            <NewsSmall
                                key={news.id}
                                news={news}
                                lineImages={lineImages}
                                imgStyles={imgStyles}
                                itemStyle={styles.item}
                                headerStyle={styles.headerItem}
                                descriptionStyle={styles.descriptionItem}
                                onClick={() => handleNewsClick(news.id)}
                            />
                        ))
                    ) : (
                        <p>Нет новостей по выбранному тегу.</p>
                    )}
                </div>
            </div>
            {newsToDisplay.length < filteredByTag.length && (
                <ButtonShowMore onClick={handleShowMore} />
            )}
        </div>
    )
}

export default AllNewsPage;