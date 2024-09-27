import React from 'react';
import moment from 'moment';
import Ornament from "../ornament/ornament";
import NewsItem from "../news-item/news-item";

const NewsSmall = ({ news, lineImages, imgStyles, itemStyle, headerStyle, descriptionStyle, onClick }) => {
    return (
        <Ornament lineImages={lineImages} imgStyles={imgStyles}>
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
            />
        </Ornament>
    );
};

export default NewsSmall;
