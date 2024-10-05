import styles from "./news-info.module.css";
import PropTypes from "prop-types";

const NewsInfo = ({ newsItem }) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}></div>
            <h1 className={styles.header}>{newsItem.header}</h1>
            <p className={styles.description}>{newsItem.description}</p>
        </div>
    )
};

NewsInfo.propTypes = {
    newsItem: PropTypes.shape({
        header: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
};


export default NewsInfo;