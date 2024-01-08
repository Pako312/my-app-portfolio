import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './style.module.scss'
import 'swiper/css';
import clsx from 'clsx';
import { ReactComponent as ArrowIcon } from '..//..//assets/img/strelka.svg'
import sassLogo from '..//..//assets/images/sass-logo.png'
import { Autoplay } from 'swiper/modules'
import html from '..//..//assets/images/html-logo.svg'
import csslogo from '..//..//assets/img/cssImg.png'
import jslogo from '..//..//assets/images/js-logo.png'
import reactLogo from '..//..//assets/images/react-logo.svg'
import reduxlogo from '..//..//assets/images/redux.svg'

export const SkillsSlider = (props) => {
    const {

    } = props
    const [swiperInstance, setSwiperInstance] = useState(null);
    return (
        <div className={styles['sliderWrap']}>
            <button onClick={() => swiperInstance.slidePrev()}
                className={clsx(styles['sliderNavButton'])}
            >
                <ArrowIcon />
            </button>
            <Swiper
                width={150}
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className={styles['slider']}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => setSwiperInstance(swiper)}

            >
                <SwiperSlide className={styles['slider__item']}>
                    <div className={styles['image-wrap']}> 
                    <img src={sassLogo}>
                    </img></div>
                    <div>
                        <h5>SASS</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles['slider__item']}>
                    <div className={styles['image-wrap']}>
                        <img src={html} />
                    </div>
                    <h5>HTML</h5>
                </SwiperSlide>
                <SwiperSlide className={styles['slider__item']}>
                    <div className={styles['image-wrap']}>
                        <img src={csslogo} />
                    </div>
                    <h5>CSS</h5>
                </SwiperSlide>
                <SwiperSlide className={styles['slider__item']}>
                    <div className={styles['image-wrap']}>
                        <img src={jslogo} />
                    </div>
                    <h5>Javascript</h5>
                </SwiperSlide>
                <SwiperSlide className={styles['slider__item']}>
                    <div className={styles['image-wrap']}>
                        <img src={reactLogo} />
                    </div>
                    <h5>React JS</h5>
                </SwiperSlide>
                <SwiperSlide className={styles['slider__item']}>
                    <div className={styles['image-wrap']}>
                        <img src={reduxlogo} />
                    </div>
                    <h5>Redux</h5>
                </SwiperSlide>
            </Swiper>
            <button onClick={() => swiperInstance.slideNext()}
                className={clsx(styles['sliderNavButton'], styles['right'])}
            >
                <ArrowIcon />
            </button>



        </div>
    )
}
