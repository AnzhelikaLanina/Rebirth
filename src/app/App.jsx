import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { PATHS } from '@/shared/lib/constants/paths';
import { MainPage, WikiPage } from '@/pages';
import { Footer, Header, ScrollToTopButton } from '@/widgets';
import { ScrollToTop } from '@/shared/lib/ScrollToTop';
import { HeadMeta } from '@/shared/ui';

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
