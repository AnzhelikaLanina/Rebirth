import Ornament from "../ornament/ornament";
import React from "react";
import NewsItem from "../news-item/news-item";
import lineHorizontal from "../../images/line-horizontal-long.svg";
import lineVertical from "../../images/line-vertical-long-short.svg";
import lineThickVertical from "../../images/line-vertical-long.svg";
import lineHorizontalShort from "../../images/line-horizontal.svg";
import lineVerticalShort from "../../images/line-vertical.svg";
import lineThickVerticalShort from "../../images/line-thick-vertical.svg";
import styles from "./news-large.module.css";
import data from '../../data/newsList.json';
import moment from "moment";
import "moment/locale/ru";
import PropTypes from "prop-types";

const NewsLarge = ({ isWide = false, onClick }) => {

    const lineImages = {
        horizontalTop: lineHorizontal,
        horizontalBottom: lineHorizontal,
        verticalLeft: lineVertical,
        verticalRight: lineVertical,
        thickVerticalLeft: lineThickVertical,
        thickVerticalRight: lineThickVertical
    };

    const lineImagesFull = {
        horizontalTop: lineHorizontalShort,
        horizontalBottom: lineHorizontalShort,
        verticalLeft: lineVerticalShort,
        verticalRight: lineVerticalShort,
        thickVerticalLeft: lineThickVerticalShort,
        thickVerticalRight: lineThickVerticalShort,
    }

    const imgStyles = {
        cornerRightBottom: styles.bottom,
        cornerLeftBottom: styles.bottom,
        horizontalTop: styles.horizontalTop,
        horizontalBottom: styles.horizontalBottom,
        verticalRight: styles.verticalRight,
        thickVerticalLeft: styles.verticalSpaceLeft,
        thickVerticalRight: styles.verticalSpaceRight
    };

    const imgStylesFull = {
        horizontalTop: styles.horizontalTopFull,
        horizontalBottom: styles.horizontalBottomFull
    }

    const mainNews = data.newsList
        .filter(news => news.isMain)
        .sort((a, b) => moment(b.date, "DD.MM.YYYY HH:mm") - moment(a.date, "DD.MM.YYYY HH:mm"))
        .slice(0, 1);

    return (
        <Ornament
            lineImages={isWide ? lineImagesFull : lineImages}
            imgStyles={isWide ? imgStylesFull : imgStyles}
        >
            {mainNews.map(news => (
                <NewsItem
                    onClick={() => onClick(news.id)}
                    key={news.id}
                    headerText={news.header}
                    tagContentText={news.tag}
                    tagDataText={moment(news.date, "DD.MM.YYYY HH:mm").locale('ru').format("D MMMM")} // Форматируем дату
                    descriptionText={news.description}
                    itemStyle={isWide ? styles.item: ''}
                    containerStyle={isWide ? styles.container: ''}
                />
            ))}
        </Ornament>
    )
}

export default NewsLarge;

NewsLarge.propTypes = {
    isWide: PropTypes.bool
}