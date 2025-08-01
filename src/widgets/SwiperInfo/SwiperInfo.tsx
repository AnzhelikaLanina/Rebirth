import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { Navigation } from 'swiper/modules';
import styles from './SwiperInfo.module.css';
import 'swiper/css';
import { useLocalizedData } from '@/shared/lib';
import { PaginationInfo } from '@/widgets';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/assets/images';
import { Slide } from './ui';

export const SwiperInfo = () => {
  const { swiperText } = useLocalizedData();

  const slides = [
    { header: swiperText.header, text: swiperText.text },
    { header: swiperText.header, text: swiperText.text },
    { header: swiperText.header, text: swiperText.text },
    { header: swiperText.header, text: swiperText.text },
    { header: swiperText.header, text: swiperText.text },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const swiperRef = useRef<{ swiper: SwiperClass }>(null);
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
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.update();
    }
  }, [isMobile]);

  const handlePaginationClick = (index: number) => {
    swiperRef.current?.swiper.slideToLoop(index);
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className={styles.swiper}>
      <Swiper
        onSlideChangeTransitionEnd={handleSlideChange}
        loop={true}
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
        <ArrowLeftIcon
          className={clsx(styles.btnImage, isBeginning && styles.disabled)}
        />
      </div>

      <div
        onClick={() => !isEnd && swiperRef.current?.swiper.slideNext()}
        className={styles.btnNext}
      >
        <ArrowRightIcon
          className={clsx(styles.btnImage, isEnd && styles.disabled)}
        />
      </div>
    </div>
  );
};
