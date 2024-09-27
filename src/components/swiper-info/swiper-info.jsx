import React, {useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import './swiper-info.module.css';
import styles from "./swiper-info.module.css";
import Slide from "../slide/slide";
import PaginationInfo from "../pagination-info/pagination-info";
import arrowRight from "../../images/arrow-right.svg";
import arrowLeft from "../../images/arrow-left.svg";

const SwiperInfo = () => {

    const slides = [
        { header: 'Идеальный баланс контента 1', text: 'Идеальный баланс контента для соло-игроков и кланов, удовлетворяя различные игровые стили.' },
        { header: 'Идеальный баланс контента 2', text: 'Идеальный баланс контента для соло-игроков и кланов, удовлетворяя различные игровые стили.' },
        { header: 'Идеальный баланс контента 3', text: 'Идеальный баланс контента для соло-игроков и кланов, удовлетворяя различные игровые стили.' },
        { header: 'Идеальный баланс контента 4', text: 'Идеальный баланс контента для соло-игроков и кланов, удовлетворяя различные игровые стили.' },
        { header: 'Идеальный баланс контента 5', text: 'Идеальный баланс контента для соло-игроков и кланов, удовлетворяя различные игровые стили.' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.params.loopedSlides = slides.length;
            swiperRef.current.swiper.update();
        }
    }, [slides.length]);

    const handlePaginationClick = (index) => {
        setActiveIndex(index);
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index );
        }
    };

    const handleSlideChange = (swiper) => {
        let newIndex = swiper.realIndex;
        setActiveIndex(newIndex);
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
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
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
            <PaginationInfo activeIndex={activeIndex} onClick={handlePaginationClick} />
            <div className={`swiper-button-next ${styles.btnNext}`}>
                <img className={styles.BtnImage} src={arrowRight} alt="правая стрелка"/>
            </div>
            <div className={`swiper-button-prev ${styles.btnPrev}`}>
                <img className={styles.BtnImage} src={arrowLeft} alt="левая стрелка"/>
            </div>
        </div>
    );
};

export default SwiperInfo;
