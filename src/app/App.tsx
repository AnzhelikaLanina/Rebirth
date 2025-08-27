import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { MainPage, WikiPage } from '@/pages';
import { Footer, Header, ScrollToTopButton } from '@/widgets';
import { HeadMeta } from '@/shared/ui';
import { PATHS, ScrollToTop } from '@/shared/lib';
import { useState } from 'react';
import { Modal } from '@/widgets/Modal';

export const App = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  return (
    <div className={styles.app}>
      <HeadMeta />
      <ScrollToTop />
      <Header onOpenModal={openModal} />
      <main className={styles.main}>
        <Routes>
          <Route path={PATHS.HOME} element={<MainPage />} />
          <Route path={PATHS.WIKI} element={<WikiPage />} />
        </Routes>
      </main>
      <Footer />
      <Modal isOpen={isOpenModal} onClose={closeModal} />
      <ScrollToTopButton />
    </div>
  );
};
