import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import {
  MainPage,
  WikiPage,
  PrivacyPolicyPage,
  UserAgreementPage,
} from '@/pages';
import { Footer, Header, ScrollToTopButton, Modal } from '@/widgets';
import { HeadMeta, PATHS, ScrollToTop } from '@/shared';

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
          <Route path={PATHS.USER_AGREEMENT} element={<UserAgreementPage />} />
          <Route path={PATHS.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
        </Routes>
      </main>
      <Footer />
      <Modal isOpen={isOpenModal} onClose={closeModal} />
      <ScrollToTopButton />
    </div>
  );
};
