import React from 'react';
import styles from './PageLayout.module.css';
import sparksNewsBottomEffect from '../..//assets/images/effects/sparks-news-bottom.svg?url';
import sparksNewsTopEffect from '../..//assets/images/effects/sparks-news-top.svg?url';

type PageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className={styles.page}>
      <img src={sparksNewsTopEffect} className={styles.sparksTop} alt="" />
      <img src={sparksNewsBottomEffect} className={styles.sparksBottom} alt="" />
      <div className={styles.patternBox} />
      <div className={styles.headerBox}>
        <h1 className={styles.header}>{title}</h1>
      </div>
      {children}
    </div>
  )
}
