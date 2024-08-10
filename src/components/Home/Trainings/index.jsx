import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './index.module.scss'
import { IoCalendarSharp } from "react-icons/io5";
import { IoMdAlarm, IoIosCheckmark } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { motion } from 'framer-motion';

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

  const breakpoints = {
    320: {
      slidesPerView: 1.1,
    },
    640: {
      slidesPerView: 1.1,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1366: {
      slidesPerView: 2.5,
    },
    1920: {
      slidesPerView: 3.2,
    },
  }

  return (
    <section id='trainings' className={styles.trainings}>
      <div className={styles.section_container}>

        <div className="container">
          <motion.div initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "tween" }} className={styles.sec_title}>
            <h1>دورات تدريبية تبدأ قريبا</h1>

            <div className={styles.img_container}>
              <img src="/assets/svgs/title_icon.svg" alt="" />
            </div>

          </motion.div>
        </div>

        <div className={styles.swiper_container}>
          <Swiper
            pagination={{ clickable: true }}
            dir="rtl"
            initialSlide={1}
            onSwiper={(swiper) => swiperRef.current = swiper}
            onSlideChange={handleSlideChange}
            className={styles.swiper_contain}
            centeredSlides={true}

            breakpoints={breakpoints}
          >
            {dataTrainings?.map((box, index) => (
              <SwiperSlide key={index} >
                <div onClick={() => handleSlideClick(index)} className={`${styles.box} ${activeSlide === index ? styles.active : ''}`}>
                  <div className={styles.img_contaienr}>
                    <img src={box.image} alt="" />

                    <div className={styles.lists}>
                      <div className={styles.list_container}>

                        <div className={styles.list_title}>
                          <p>تشمل الدورة المحاور الآتية :-</p>
                        </div>
                        {box.topics.map((list, idx) =>
                          < div className={styles.list} key={idx}>
                            <div className={styles.icon_container}>
                              <IoIosCheckmark />
                            </div>
                            <p>{list}</p>
                          </div>
                        )}

                      </div>

                    </div>
                  </div>

                  <div className={styles.text_container}>
                    <div className={styles.title_sec}>
                      <div className={styles.title}>
                        <p>{box.title}</p>
                      </div>

                      {box.duration &&
                        <div className={styles.duration}>
                          ({box.duration})
                        </div>
                      }
                    </div>

                    <div className={styles.dates}>
                      {box.date &&
                        <div className={styles.date}>
                          <div className={styles.icon_container}>
                            <IoCalendarSharp />
                          </div>
                          <p>{box.date}</p>
                        </div>
                      }
                      <div className={styles.time}>
                        {box.time &&
                          <div className={styles.time_container}>
                            <div className={styles.icon_container}>
                              <IoMdAlarm />
                            </div>
                            <p>{box.time}</p>
                          </div>
                        }

                        {box.is_online ?
                          <div className={styles.is_online}>

                            <div className={styles.icon_container}>
                              <MdLocationOn />
                            </div>
                            <p>تدريب اونلاين</p>
                          </div>

                          :
                          <div className={styles.is_online}>

                            <div className={styles.icon_container}>
                              <MdLocationOn />
                            </div>
                            <p>تدريب في المركز</p>
                          </div>
                        }

                      </div>
                    </div>
                  </div>


                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.btn_container}>
          <button>
            دليل الدورات التدريبية
          </button>
        </div>

      </div>
    </section >
  )
}

export default Trainings