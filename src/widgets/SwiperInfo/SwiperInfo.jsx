import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './SwiperInfo.module.css';
import { useLocalizedData } from '../../shared/lib/hooks';
import { Slide } from './ui';
import { PaginationInfo } from '../PaginationInfo';
import { ArrowLeftIcon, ArrowRightIcon } from '../../shared/assets/images';
import clsx from 'clsx';

export const SwiperInfo = () => {
  const { swiper } = useLocalizedData();

  const slides = [
    { header: swiper.header, text: swiper.text },
    { header: swiper.header, text: swiper.text },
    { header: swiper.header, text: swiper.text },
    { header: swiper.header, text: swiper.text },
    { header: swiper.header, text: swiper.text },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.loopedSlides = slides.length;
      swiperRef.current.swiper.update();
    }
  }, [slides.length, isMobile]);

  const handlePaginationClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    setActiveIndex(newIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className={styles.swiper}>
      <Swiper
        onSlideChangeTransitionEnd={handleSlideChange}
        ref={swiperRef}
        modules={[Navigation]}
        pagination={false}
        slidesPerView={1}
        speed={300}
        navigation={{
          nextEl: '.swiper-Button-next',
          prevEl: '.swiper-Button-prev',
        }}
      >
        <div className={`swiper-wrapper ${styles.wrapper}`}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Slide header={slide.header} text={slide.text} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <PaginationInfo
        activeIndex={activeIndex}
        onClick={handlePaginationClick}
      />
      <div
        onClick={() => !isBeginning && swiperRef.current?.swiper.slidePrev()}
        className={styles.btnPrev}
      >
        <ArrowLeftIcon className={clsx(styles.btnImage, isBeginning && styles.disabled)} />
      </div>

      <div
        onClick={() => !isEnd && swiperRef.current?.swiper.slideNext()}
        className={styles.btnNext}
      >
        <ArrowRightIcon className={clsx(styles.btnImage, isEnd && styles.disabled)} />
      </div>

    </div>
  );
};
