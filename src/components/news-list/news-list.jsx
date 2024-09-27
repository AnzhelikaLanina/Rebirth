import lineHorizontal from "../../images/line-horizontal-long.svg";
import lineVertical from "../../images/line-vertical-short.svg";
import lineThickVertical from "../../images/line-vertical-space-short.svg";
import styles from "./news-list.module.css";
import data from "../../data/newsList.json";
import moment from "moment/moment";
import React from "react";
import NewsSmall from "../news-small/news-small";

const NewsList = ( {onClick} ) => {

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
                        lineImages={lineImages}
                        imgStyles={imgStyles}
                        itemStyle={getItemStyle(index)}
                        headerStyle={styles.header}
                        descriptionStyle={styles.description}

                    />
            ))}
        </>
    )
}

export default NewsList;