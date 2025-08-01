import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { MainPage, WikiPage } from '@/pages';
import { Footer, Header, ScrollToTopButton } from '@/widgets';
import { HeadMeta } from '@/shared/ui';
import { PATHS, ScrollToTop } from '@/shared/lib';

export const App = () => {
  return (
    <div className={styles.app}>
      <HeadMeta />
      <ScrollToTop />
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path={PATHS.HOME} element={<MainPage />} />
          <Route path={PATHS.WIKI} element={<WikiPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};
