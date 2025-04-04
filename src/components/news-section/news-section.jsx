import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./news-section.module.css";
import NewsLarge from "../news-large/news-large";
import NewsList from "../news-list/news-list";
import Button from "../button/button";
import sparksTopImage from "../../images/sparks-news-top.svg";
import sparksBottomImage from "../../images/sparks-news-bottom.svg";

const NewsSection = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleNewsClick = (id) => {
        navigate(`/news/${id}`);
    };

    return (
        <section className={styles.news}>
            <img
                src={sparksBottomImage}
                className={styles.sparksBottom}
                alt={'рыжие огоньки'}
            />
            <img
                src={sparksTopImage}
                className={styles.sparksTop}
                alt={'рыжие огоньки'}
            />
            <div className={styles.patternBox}></div>
            <h2 className={styles.header}>Последние новости</h2>
            <div className={styles.container}>
                <NewsLarge onClick={handleNewsClick}/>
                <div className={styles.list}>
                    <NewsList onClick={handleNewsClick}/>
                </div>
            </div>
            <Button
                className={styles.buttonBlue}
                text={"Все новости"}
                classNameText={styles.textButton}
                onClick={() => handleNavigation('/news')}
            />
        </section>
    )
};

export default NewsSection;