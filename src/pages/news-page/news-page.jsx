import NewsInfo from "../../components/news-info/news-info";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import styles from "./news-page.module.css";
import '../page.css';
import {useParams} from "react-router-dom";
import data from "../../data/newsList.json";

const NewsPage = () => {
    const { id } = useParams();
    const newsItem = data.newsList.find(news => news.id === Number(id));

    if (!newsItem) {
        return <p>Новость не найдена.</p>;
    }

    return (
        <div className={"main"}>
            <div className={styles.container}>
                <Breadcrumbs newsItemHeader={newsItem.header} />
                <NewsInfo newsItem={newsItem} />
            </div>
        </div>
    )
}

export default NewsPage;