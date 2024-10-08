import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './index.module.scss'
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';

const OurNews = ({ dataNews }) => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleSlideClick = (index) => {
    swiperRef?.current?.slideTo(index);
    setActiveSlide(index);
  };

  const breakpoints = {
    320: {
      slidesPerView: 2.8,
    },
    380: {
      slidesPerView: 2.8,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1366: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 3,
    },
  };


  return (
    <>
      <section id='our_news' className={styles.our_news}>
        <div className="container">

          <div className={styles.section_container}>
            <div className={styles.text_container}>
              <motion.div initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween" }} className={styles.title}>
                <h1>أخبارنا و فعاليتنا </h1>
                <div className={styles.circle}>
                  <img src="/assets/svgs/circles.svg" alt="" />
                </div>
              </motion.div>
            </div>



            <div className={styles.swiper_container}>
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}

                className={styles.active_slider}>
                <div className={styles.img_container}>

                  <img src={dataNews[activeSlide]?.image} alt="" />
                </div>

                <div className={styles.text_container}>
                  <div className={styles.title}>
                    <h3>{dataNews[activeSlide]?.title}</h3>
                  </div>
                  <div className={styles.desc}>
                    <p>
                      {dataNews[activeSlide]?.desc}
                    </p>
                  </div>
                </div>

              </motion.div>


              <div className={styles.swiper} id='swiper'>
                <Swiper
                  // spaceBetween={8}
                  // slidesPerView={3}
                  pagination={{ clickable: true }}
                  dir="rtl"
                  modules={[Navigation, FreeMode]}
                  initialSlide={1}
                  onSwiper={(swiper) => swiperRef.current = swiper}
                  onSlideChange={handleSlideChange}
                  className={styles.swiper_contain}
                  centeredSlides={true}
                  breakpoints={breakpoints}

                  navigation={{
                    prevEl: '.left_arrow',
                    nextEl: '.right_arrow',
                  }}
                >
                  {dataNews.map((box, index) => (
                    <SwiperSlide key={index} >
                      <div onClick={() => handleSlideClick(index)} className={`${styles.box} ${activeSlide === index ? styles.active : ''}`}>
                        <img src={box.image} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>








                <div className='left_arrow'>
                  <IoMdArrowBack />



                </div>

                <div className='right_arrow'>
                  <IoMdArrowForward />
                </div>



              </div>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}

export default OurNews