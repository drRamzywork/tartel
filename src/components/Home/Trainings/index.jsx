import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './index.module.scss'
import { IoCalendarSharp } from "react-icons/io5";
import { IoMdAlarm, IoIosCheckmark } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";


const Trainings = ({ }) => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleSlideClick = (index) => {
    swiperRef?.current?.slideTo(index);
    setActiveSlide(index);
  };

  const dataTrainings = [
    {
      title: 'دورة تحفيظ القرآن',
      lists: ['اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها'],
      date: '٢٢ يوليو ٢٠٢٤',
      time: '٠٦:٠٠ صباحا : ١٢:٠٠ ظهرا',
      isOnline: true,
      duration: 'شهر',
      img: '/assets/imgs/takreem.jpeg'
    },
    {
      title: 'دورة تحفيظ القرآن',
      lists: ['اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها'],
      date: '٢٢ يوليو ٢٠٢٤',
      time: '٠٦:٠٠ صباحا : ١٢:٠٠ ظهرا',
      isOnline: true,
      duration: 'شهر',
      img: '/assets/imgs/takreem.jpeg'
    },
    {
      title: 'دورة تحفيظ القرآن',
      lists: ['اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها'],
      date: '٢٢ يوليو ٢٠٢٤',
      time: '٠٦:٠٠ صباحا : ١٢:٠٠ ظهرا',
      isOnline: true,
      duration: 'شهر',
      img: '/assets/imgs/takreem.jpeg'
    },
    {
      title: 'دورة تحفيظ القرآن',
      lists: ['اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها'],
      date: '٢٢ يوليو ٢٠٢٤',
      time: '٠٦:٠٠ صباحا : ١٢:٠٠ ظهرا',
      isOnline: true,
      duration: 'شهر',
      img: '/assets/imgs/takreem.jpeg'
    },
    {
      title: 'دورة تحفيظ القرآن',
      lists: ['اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها', 'اعداد الدروس و تحضيرها'],
      date: '٢٢ يوليو ٢٠٢٤',
      time: '٠٦:٠٠ صباحا : ١٢:٠٠ ظهرا',
      isOnline: true,
      duration: 'شهر',
      img: '/assets/imgs/takreem.jpeg'
    },
  ]


  return (
    <section id='trainings' className={styles.trainings}>
      <div className={styles.section_container}>
        <div className="container">
          <div className={styles.sec_title}>
            <h1>دورات تدريبية تبدأ قريبا</h1>

            <div className={styles.img_container}>
              <img src="/assets/svgs/title_icon.svg" alt="" />
            </div>

          </div>
        </div>

        <div className={styles.swiper_container}>
          <Swiper
            slidesPerView={2.7}
            pagination={{ clickable: true }}
            dir="rtl"
            modules={[Navigation, FreeMode]}
            initialSlide={1}
            onSwiper={(swiper) => swiperRef.current = swiper}
            onSlideChange={handleSlideChange}
            className={styles.swiper_contain}
            navigation={{
              prevEl: '.left_arrow',
              nextEl: '.right_arrow',
            }}
            centeredSlides={true}
          >
            {dataTrainings?.map((box, index) => (
              <SwiperSlide key={index} >
                <div onClick={() => handleSlideClick(index)} className={`${styles.box} ${activeSlide === index ? styles.active : ''}`}>
                  <div className={styles.img_contaienr}>
                    <img src={box.img} alt="" />

                    <div className={styles.lists}>
                      <div className={styles.list_container}>

                        <div className={styles.list_title}>
                          <p>تشمل الدورة المحاور الآتية :-</p>
                        </div>
                        {box.lists.map((list, idx) =>
                          < div className={styles.list}>
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
                      <div className={styles.duration}>
                        ({box.duration})
                      </div>
                    </div>

                    <div className={styles.dates}>
                      <div className={styles.date}>
                        <div className={styles.icon_container}>
                          <IoCalendarSharp />
                        </div>
                        <p>{box.date}</p>
                      </div>

                      <div className={styles.time}>
                        <div className={styles.time_container}>
                          <div className={styles.icon_container}>
                            <IoMdAlarm />
                          </div>
                          <p>{box.time}</p>


                        </div>

                        <div className={styles.is_online}>

                          <div className={styles.icon_container}>
                            <MdLocationOn />
                          </div>
                          <p>تدريب اونلاين</p>
                        </div>
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