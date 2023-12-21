import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './style.module.scss'
import 'swiper/css';
import clsx from 'clsx';
import { ReactComponent as ArrowIcon } from '..//..//assets/img/strelka.svg'
import JsLogo from '..//..//assets/images/sass-logo.png'
import { Autoplay } from 'swiper/modules'
const SkillsSlider = (props) => {
    const {

    } = props
    const [swiperInstance, setSwiperInstance] = useState(null);
    return (
        <div className={styles['sliderWrap']}>
            <button onClick={() => swiperInstance.slidePrev()}
                className={clsx(styles['sliderNavButton'])}
            >
                {/* Prev */}
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
                <SwiperSlide className={styles['slider__item']}>Slide 1
                    <div className={styles['image-wrap']}> <img src={JsLogo}>
                    </img></div>
                    <h6>SASS</h6>
                </SwiperSlide>
                <SwiperSlide className={styles['slider__item']}>Slide 2
                    <div className={styles['image-wrap']}>
                        <img src={JsLogo} />
                    </div>
                    <h6>SASS</h6>
                </SwiperSlide>
                <SwiperSlide className={styles['slider__item']}>Slide 3
                    <div className={styles['image-wrap']}>
                        <img src={JsLogo} />
                    </div>
                    <h6>SASS</h6>
                </SwiperSlide>
                <SwiperSlide className={styles['slider__item']}>Slide 4
                    <div className={styles['image-wrap']}>
                        <img src={JsLogo} />
                    </div>
                    <h6>SASS</h6>
                </SwiperSlide>
            </Swiper>
            <button onClick={() => swiperInstance.slideNext()}
                className={clsx(styles['sliderNavButton'], styles['right'])}
            >
                <ArrowIcon />
                {/* Next */}
            </button>



        </div>
    )
}

export default SkillsSlider;