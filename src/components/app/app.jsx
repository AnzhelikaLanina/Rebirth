import './app.module.css';
import styles from './app.module.css';
import Header from "../header/header";
import {Route, Routes, useLocation} from "react-router-dom";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";
import NewsPage from "../../pages/news-page/news-page";
import AllNewsPage from "../../pages/all-news-page/all-news-page";
import WikiPage from "../../pages/wiki-page/wiki-page";
import PatchNotePage from "../../pages/patchnote-page/patchnote-page";
import {useEffect, useState} from "react";
import Modal from "../modal/modal";

const App = () => {
    const location = useLocation();
    const [isOpenModal, setOpenModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0); // Прокручивает страницу к верхней части при изменении маршрута
    }, [location]);

    const toggleModal = () => {
        setOpenModal(!isOpenModal);
    };

  return (
          <div className={styles.app}>
              <Header onOpenModal={toggleModal} />
              <main className={styles.main}>
                  <Routes>
                      <Route path="/" element={<MainPage />} />
                      <Route path="/news" element={<AllNewsPage />} />
                      <Route path="/news/:id" element={<NewsPage />} />
                      <Route path="/wiki" element={<WikiPage />} />
                      <Route path="/patchnote" element={<PatchNotePage />} />
                  </Routes>
              </main>
              <Footer />
              <Modal isOpen={isOpenModal} onClose={toggleModal} />
          </div>
  )
}

export default App;
