import './app.module.css';
import styles from './app.module.css';
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";
import NewsPage from "../../pages/news-page/news-page";
import AllNewsPage from "../../pages/all-news-page/all-news-page";
import WikiPage from "../../pages/wiki-page/wiki-page";
import Modal from "../modal/modal";
import {PATHS} from "../../utils/constants/paths";

const App = () => {
    const location = useLocation();
    const [isOpenModal, setOpenModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const toggleModal = () => {
        setOpenModal(!isOpenModal);
    };

  return (
          <div className={styles.app}>
              <Header onOpenModal={toggleModal} />
              <main className={styles.main}>
                  <Routes>
                      <Route path={PATHS.HOME} element={<MainPage />} />
                      <Route path={PATHS.NEWS} element={<AllNewsPage />} />
                      <Route path={PATHS.NEWSPAGE} element={<NewsPage />} />
                      <Route path={PATHS.WIKI} element={<WikiPage />} />
                  </Routes>
              </main>
              <Footer onOpenModal={toggleModal} />
              <Modal isOpen={isOpenModal} onClose={toggleModal} />
          </div>
        )
};

export default App;
