import NewsInfo from "../../components/news-info/news-info";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import styles from "./news-page.module.css";
import '../page.css';
import {useParams} from "react-router-dom";
import data from "../../data/newsList.json";
import sparksTop from "../../images/sparks-news-top.svg";
import sparksBottom from "../../images/sparks-news-bottom.svg";
import React from "react";

const NewsPage = () => {
    const { id } = useParams();
    const newsItem = data.newsList.find(news => news.id === Number(id));

    if (!newsItem) {
        return <p>Новость не найдена.</p>;
    }

    return (
        <div className={"main"}>
            <img src={sparksTop} className={"sparksTop"}/>
            <img src={sparksBottom} className={"sparksBottom"}/>
            <div className={"patternBox"}></div>
            <div className={styles.container}>
                <Breadcrumbs newsItemHeader={newsItem.header}/>
                <NewsInfo newsItem={newsItem}/>
            </div>
        </div>
    )
}

export default NewsPage;