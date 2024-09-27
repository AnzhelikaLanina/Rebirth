import React from "react";
import styles from "./news-item.module.css";
import PropTypes from "prop-types";

const NewsItem = ({
                      onClick,
                      tagDataText,
                      tagContentText,
                      headerText,
                      descriptionText,
                      itemStyle,
                      headerStyle,
                      descriptionStyle,
                      containerStyle
                  }) => {
    return (
        <div onClick={onClick} className={`${styles.item} ${itemStyle ? itemStyle : ""}`}>
            <div className={styles.overlay}></div>
            <div className={styles.tags}>
                <div className={styles.tag}>
                    <p className={styles.tagsText}>{tagContentText}</p>
                </div>
                <div className={styles.tag}>
                    <p className={styles.tagsText}>{tagDataText}</p>
                </div>
            </div>
            <div className={`${styles.container} ${containerStyle ? containerStyle : ""}`}>
                <h3 className={`${styles.header} ${headerStyle ? headerStyle : ""}`}>{headerText}</h3>
                <p className={`${styles.description} ${descriptionStyle ? descriptionStyle : ""}`}>{descriptionText}</p>
            </div>
        </div>
    );
};

NewsItem.propTypes = {
    tagDataText: PropTypes.string.isRequired,
    tagContentText: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired,
    descriptionText: PropTypes.string.isRequired,
    itemStyle: PropTypes.string,
    headerStyle: PropTypes.string,
    descriptionStyle: PropTypes.string,
    containerStyle: PropTypes.string
};

export default NewsItem;
