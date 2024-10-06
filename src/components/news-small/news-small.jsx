import React from 'react';
import { useMediaQuery } from "react-responsive";
import moment from 'moment';
import styles from "./news-small.module.css";
import NewsItem from "../news-item/news-item";
import frameMobile from "../../images/ornament-news-small-mobile.svg";
import frame from "../../images/ornament-news-small-main.svg";
import frameSmall from "../../images/ornament-small-news.svg";
import PropTypes from "prop-types";

const NewsSmall = ({
                       news,
                       itemStyle,
                       headerStyle,
                       descriptionStyle,
                       onClick,
                       isSmall=false
}) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1241px)' });
    return (
        <div className={isDesktop ? (isSmall ? styles.ornamentBoxSmall : styles.ornamentBox) : (styles.ornamentBoxMobile) }>
            {isDesktop ? (
                isSmall ?
                    <img src={frameSmall} className={styles.ornament} alt={'рамка'}/>
                    :
                    <img src={frame} className={styles.ornament} alt={'рамка'} />
            ) : (
                <img src={frameMobile} className={styles.ornament} alt={'рамка'} />
            )}
            <NewsItem
                onClick={() => onClick(news.id)}
                key={news.id}
                headerText={news.header}
                tagContentText={news.tag}
                tagDataText={moment(news.date, "DD.MM.YYYY HH:mm").locale('ru').format("D MMMM")} // Форматируем дату
                descriptionText={news.description}
                itemStyle={itemStyle}
                headerStyle={headerStyle}
                descriptionStyle={descriptionStyle}
                containerStyle={styles.container}
                isAllNewsPage={isSmall}
            />
        </div>
    );
};

NewsSmall.propTypes = {
    news: PropTypes.shape({
        id: PropTypes.number.isRequired,
        header: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired,
    itemStyle: PropTypes.string.isRequired,
    headerStyle: PropTypes.string.isRequired,
    descriptionStyle: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isSmall: PropTypes.bool
};

export default NewsSmall;
