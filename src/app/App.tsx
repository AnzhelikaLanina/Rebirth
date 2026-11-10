import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import type { Location } from 'react-router-dom';
import styles from './App.module.css';
import {
  MainPage,
  WikiPage,
  PrivacyPolicyPage,
  UserAgreementPage,
} from '@/pages';
import { Footer, Header, ScrollToTopButton, Modal } from '@/widgets';
import {
  HeadMeta,
  MEDIA_BREAKPOINTS,
  MetrikaTracker,
  MODALS,
  PATHS,
  ScrollToTop,
} from '@/shared';

type ModalType = (typeof MODALS)[keyof typeof MODALS];

export const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [modalType, setModalType] = useState<ModalType | null>(null);
  const isDownloadAvailable = useMediaQuery({
    query: MEDIA_BREAKPOINTS.DESKTOP_MEDIUM,
  });

  useEffect(() => {
    if (!isDownloadAvailable && modalType === MODALS.DOWNLOAD) {
      setModalType(null);
    }
  }, [isDownloadAvailable, modalType]);

  const isPromoCodesRoute = location.pathname === PATHS.PROMO_CODES;
  const backgroundLocation = (
    location.state as { background?: Location } | null
  )?.background;
  const routesLocation = isPromoCodesRoute
    ? (backgroundLocation ?? PATHS.HOME)
    : location;

  const leavePromoCodesRoute = () => {
    if (backgroundLocation) {
      navigate(-1);
    } else {
      navigate(PATHS.HOME, { replace: true });
    }
  };

  const openModal = (type: ModalType) => {
    if (type === MODALS.DOWNLOAD && !isDownloadAvailable) return;

    if (type === MODALS.PROMO_CODE) {
      if (isPromoCodesRoute) return;

      navigate(PATHS.PROMO_CODES, { state: { background: location } });
      return;
    }

    if (isPromoCodesRoute) leavePromoCodesRoute();

    setModalType(type);
  };

  const closeModal = () => {
    if (isPromoCodesRoute) {
      leavePromoCodesRoute();
      return;
    }

    setModalType(null);
  };

  const activeModal = isPromoCodesRoute ? MODALS.PROMO_CODE : modalType;

  return (
    <div className={styles.app}>
      <HeadMeta />
      <ScrollToTop />
      <MetrikaTracker />
      <Header onOpenModal={openModal} />
      <main className={styles.main}>
        <Routes location={routesLocation}>
          <Route path={PATHS.HOME} element={<MainPage />} />
          <Route path={PATHS.WIKI} element={<WikiPage />} />
          <Route path={PATHS.USER_AGREEMENT} element={<UserAgreementPage />} />
          <Route path={PATHS.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
        </Routes>
      </main>
      <Footer />
      <Modal
        isOpen={activeModal !== null}
        type={activeModal}
        onClose={closeModal}
      />
      <ScrollToTopButton />
    </div>
  );
};
