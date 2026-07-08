import styles from './MainPage.module.css';
import { Advantages, Features, TitleSection, ServerInfo } from '@/widgets';

export const MainPage = () => {
  return (
    <>
      <div className={styles.page}>
        <TitleSection />
        <Features />
        <Advantages />
        <ServerInfo />
      </div>
    </>
  );
};
