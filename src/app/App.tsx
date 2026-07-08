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
import { HeadMeta, MODALS, PATHS, ScrollToTop } from '@/shared';

type ModalType = (typeof MODALS)[keyof typeof MODALS];

export const App = () => {
  const [modalType, setModalType] = useState<ModalType | null>(null);

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <div className={styles.app}>
      <HeadMeta />
      <ScrollToTop />
      <Header onOpenModal={setModalType} />
      <main className={styles.main}>
        <Routes>
          <Route path={PATHS.HOME} element={<MainPage />} />
          <Route path={PATHS.WIKI} element={<WikiPage />} />
          <Route path={PATHS.USER_AGREEMENT} element={<UserAgreementPage />} />
          <Route path={PATHS.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
        </Routes>
      </main>
      <Footer />
      <Modal
        isOpen={modalType !== null}
        type={modalType}
        onClose={closeModal}
      />
      <ScrollToTopButton />
    </div>
  );
};
