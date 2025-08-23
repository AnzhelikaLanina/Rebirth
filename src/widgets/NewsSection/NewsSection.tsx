import { useNavigate } from 'react-router-dom';
import styles from './NewsSection.module.css';
import { PATHS, useLocalizedData } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { NewsLarge, NewsList } from './ui';
import sparksNewsTopEffect from '../../shared/assets/images/effects/sparks-news-top.svg?url';
import sparksNewsBottomEffect from '../../shared/assets/images/effects/sparks-news-bottom.svg?url';

export const NewsSection = () => {
  const navigate = useNavigate();
  const { newsBlock } = useLocalizedData();
  return (
    <section className={styles.news}>
      <img src={sparksNewsTopEffect} className={styles.sparksTop} alt="" />
      <img src={sparksNewsBottomEffect} className={styles.sparksBottom} alt="" />
      <div className={styles.patternBox} />
      <h2 className={styles.header}>{newsBlock.header}</h2>
      <div className={styles.container}>
        <NewsLarge />
        <div className={styles.list}>
          <NewsList />
        </div>
      </div>
      <Button
        className={styles.buttonBlue}
        text={newsBlock.button}
        classNameText={styles.textButton}
        onClick={() => navigate(PATHS.WIKI)}
      />
    </section>
  );
};
