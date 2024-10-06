import '../page.css';
import styles from "./news-page.module.css";
import { useParams } from "react-router-dom";
import NewsInfo from "../../components/news-info/news-info";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import data from "../../data/newsList.json";
import sparksTopImage from "../../images/sparks-news-top.svg";
import sparksBottomImage from "../../images/sparks-news-bottom.svg";
import { Helmet } from "react-helmet-async";

const NewsPage = () => {
    const { id } = useParams();
    const newsItem = data.newsList.find(news => news.id === Number(id));

    if (!newsItem) {
        return <p>Новость не найдена.</p>;
    }

    const { header, description } = newsItem;

    return (
        <>
            <Helmet>
                <title>{header}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div className={"main"}>
                <img
                    src={sparksTopImage}
                    className={"sparksTop"}
                    alt={'рыжие огоньки'}
                />
                <img
                    src={sparksBottomImage}
                    className={"sparksBottom"}
                    alt={'рыжие огоньки'}
                />
                <div className={"patternBox"}></div>
                <div className={styles.container}>
                    <Breadcrumbs newsItemHeader={newsItem.header}/>
                    <NewsInfo newsItem={newsItem}/>
                </div>
            </div>
        </>
    )
};

export default NewsPage;