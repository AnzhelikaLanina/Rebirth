import styles from "./news-info.module.css";

const NewsInfo = ( {newsItem} ) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}></div>
            <h1 className={styles.header}>{newsItem.header}</h1>
            <p className={styles.description}>{newsItem.description}</p>
        </div>
    )
}

export default NewsInfo;