import React from "react";
import { useMediaQuery } from "react-responsive";
import NewsItem from "../news-item/news-item";
import styles from "./news-large.module.css";
import data from '../../data/newsList.json';
import moment from "moment";
import "moment/locale/ru";
import PropTypes from "prop-types";
import frame from "../../images/ornament-large-news-main.svg";
import frameMobile from "../../images/features-ornament-mobile.svg";
import frameWide from "../../images/ornament-news-large.svg";

const NewsLarge = ({ isWide = false, onClick }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1240px)' });

    const mainNews = data.newsList
        .filter(news => news.isMain)
        .sort((a, b) => moment(b.date, "DD.MM.YYYY HH:mm") - moment(a.date, "DD.MM.YYYY HH:mm"))
        .slice(0, 1);

    return (
        <div className={isWide ? styles.ornamentBoxWide : styles.ornamentBox}>
            {isDesktop ? (
                isWide ? <img src={frameWide} className={styles.ornament} alt={'рамка'}/>
                    : <img src={frame} className={styles.ornament} alt={'рамка'}/>
            ) : (
                <img src={frameMobile} className={styles.ornament} alt={'рамка'}/>
            )}
            {mainNews.map(news => (
                <NewsItem
                    onClick={() => onClick(news.id)}
                    key={news.id}
                    headerText={news.header}
                    tagContentText={news.tag}
                    tagDataText={moment(news.date, "DD.MM.YYYY HH:mm").locale('ru').format("D MMMM")} // Форматируем дату
                    descriptionText={news.description}
                    itemStyle={`${styles.itemBase} ${isWide ? styles.item: ''}`}
                    containerStyle={`${styles.containerBase} ${isWide ? styles.container: ''}`}
                    isAllNewsPage={isWide}
                />
            ))}
        </div>
    )
}

export default NewsLarge;

NewsLarge.propTypes = {
    isWide: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}