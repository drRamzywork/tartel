import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './index.module.scss'


const Trainings = ({ dataTrainings }) => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleSlideClick = (index) => {
    swiperRef?.current?.slideTo(index);
    setActiveSlide(index);
  };


  return (
    <section id='trainings' className='trainings'>
      {/* <div className="section_container">
        <Swiper
          slidesPerView={3}
          pagination={{ clickable: true }}
          dir="rtl"
          modules={[Navigation, FreeMode]}
          initialSlide={1}
          onSwiper={(swiper) => swiperRef.current = swiper}
          onSlideChange={handleSlideChange}
          className={styles.swiper_contain}
          centeredSlides={true}

          navigation={{
            prevEl: '.left_arrow',
            nextEl: '.right_arrow',
          }}
        >
          {dataTrainings?.map((box, index) => (
            <SwiperSlide key={index} >
              <div onClick={() => handleSlideClick(index)} className={`${styles.box} ${activeSlide === index ? styles.active : ''}`}>
                <div className="img_contaienr"></div>
                <img src={box.image} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div> */}
    </section>
  )
}

export default Trainings