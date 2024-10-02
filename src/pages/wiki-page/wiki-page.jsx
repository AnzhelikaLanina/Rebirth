import '../page.css';
import styles from "./wiki-page.module.css";
import WrapperWiki from "../../components/wrapper-wiki/wrapper-wiki";
import sparksTop from "../../images/sparks-news-top.svg";
import sparksBottom from "../../images/sparks-news-bottom.svg";
import React from "react";

const WikiPage = () => {
    return (
        <div className={"main"}>
            <img src={sparksTop} className={"sparksTop"}/>
            <img src={sparksBottom} className={"sparksBottom"}/>
            <div className={"patternBox"}></div>
            <div className={styles.headerBox}>
                <h1 className={styles.header}>Описание сервера</h1>
            </div>
            <WrapperWiki/>
        </div>
    )
}

export default WikiPage;