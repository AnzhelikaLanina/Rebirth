import '../page.css';
import styles from "./patchnote-page.module.css";
import WrapperPatchnote from "../../components/wrapper-patchnote/wrapper-patchnote";
import sparksTop from "../../images/sparks-news-top.svg";
import sparksBottom from "../../images/sparks-news-bottom.svg";
import React from "react";

const PatchNotePage = () => {
    return (
        <div className={"main"}>
            <img src={sparksTop} className={"sparksTop"}/>
            <img src={sparksBottom} className={"sparksBottom"}/>
            <div className={"patternBox"}></div>
            <div className={styles.headerBox}>
                <h1 className={styles.header}>Патчноуты</h1>
            </div>
            <WrapperPatchnote/>
        </div>
    )
}

export default PatchNotePage;