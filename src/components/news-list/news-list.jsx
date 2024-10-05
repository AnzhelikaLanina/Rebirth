import styles from "./news-list.module.css";
import data from "../../data/newsList.json";
import moment from "moment/moment";
import React from "react";
import NewsSmall from "../news-small/news-small";
import PropTypes from "prop-types";

const NewsList = ( {onClick} ) => {

    const sortedNewsList = data.newsList.sort((a, b) => moment(b.date, "DD.MM.YYYY HH:mm") - moment(a.date, "DD.MM.YYYY HH:mm"));
    const latestMainNews = sortedNewsList.find(news => news.isMain);
    const filteredNewsList = sortedNewsList.filter(news => news.id !== latestMainNews?.id);
    const newsToDisplay = filteredNewsList.slice(0, 3);

    const getItemStyle = (index) => {
        switch (index) {
            case 0:
                return styles.itemTop;    // Последняя новость
            case 1:
                return styles.itemCenter; // Предпоследняя новость
            case 2:
                return styles.itemBottom; // Самая старая из трех
            default:
                return '';
        }
    };

    return (
        <>
            {newsToDisplay.map((news, index) => (
                    <NewsSmall
                        onClick={() => onClick(news.id)}
                        key={news.id}
                        news={news}
                        itemStyle={getItemStyle(index)}
                        headerStyle={styles.header}
                        descriptionStyle={styles.description}
                        isSmall={false}
                    />
            ))}
        </>
    )
};

NewsList.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default NewsList;