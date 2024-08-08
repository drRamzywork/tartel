import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import HeaderPages from '../HeaderPages'
import styles from './index.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Reading = ({ dataImages }) => {
  const mainImg = '/assets/imgs/Reading.jpeg';
  const mainTitle = 'المقرأة الالكترونية';

  return (
    <>

      <Navbar dataImages={dataImages} />
      <main>
        <HeaderPages
          mainImg={mainImg}
          mainTitle={mainTitle}
        />

        <section id='reading' className={styles.reading}>
          <div className={styles.bg_contaienr}>
            <img src="/assets/svgs/sections_bg.svg" alt="" />
          </div>

          <div className="container">
            <div className={styles.section_container}>
              <div className={styles.text_container}>
                <div className={styles.sec_ask}>
                  <p>ماهي ؟؟؟</p>
                  <div className={styles.icon_container}>
                    <img src="/assets/svgs/sections_shape.svg" alt="" />
                  </div>
                </div>

                <div className={styles.title}>
                  <h1>المقرأة الالكترونية</h1>
                </div>

                <div className={styles.desc}>
                  هي منصة تعليمية رقمية تعنى بحفظ القرآن الكريم وتعليمه، مستهدفة جميع الأفراد من داخل المملكة العربية السعودية وخارجها، الراغبين في تعلم القرآن، وذلك بتوظيف كفاءات مهنية متخصصة، وفق خطة تعليمية مدروسة تتيح للطلاب اختيار المنهج والمسار الذي يناسبهم منذ البداية حتى إتمام حفظ القرآن بأكمله. تضمن المقرأة الإلكترونية تخصيص الوقت المناسب للتسميع والمراجعة ضمن المدة الزمنية المحددة خلال اليوم الدراسي.
                </div>


                <motion.div initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, type: "tween" }} className={styles.join_us_btn}>

                  <button>
                    <Link href={`${dataImages.items.hero_btn.text}`}>
                      {dataImages.items.hero_btn.name}
                    </Link>
                  </button>
                </motion.div>

              </div>


              <div className={styles.images_container}>
                <div className={styles.bg_img}>
                  <img src="/assets/svgs/reading_shape.svg" alt="" />
                </div>

                <motion.div initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, type: "tween" }} className={styles.first_img}>
                  <img src="/assets/imgs/quran2.jpeg" alt="" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, type: "tween" }} className={styles.sec_img}>
                  <img src="/assets/imgs/quraaaan.jpg" alt="" />
                </motion.div>

              </div>
            </div>
          </div>


          <div className={styles.goals}>
            <div className={styles.goals_bg}>
              <img src="/assets/svgs/our_goals_bg_sec.svg" alt="" />
            </div>

            <div className="container" id={styles.container}>
              <motion.div initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "tween" }} className={styles.img_container}>
                <img src={"/assets/imgs/reading_goals.jpg"} alt="" />

                <div className={styles.title}>
                  <h4>الأهداف</h4>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, type: "tween" }} className={styles.goals_container}>

                <div className={styles.goal}>
                  <div className={styles.icon_container}>
                    <img src="/assets/svgs/checkd.svg" alt="" />
                  </div>
                  <p>زيادة عدد المستفيدين من مختلف شرائح المجتمع في برنامج تعليم القرآن الكريم.</p>


                </div>
                <div className={styles.goal}>
                  <div className={styles.icon_container}>
                    <img src="/assets/svgs/checkd.svg" alt="" />
                  </div>
                  <p>
                    مساعدة النساء اللاتي لا يستطعن الالتحاق بالمدارس في حفظ كتاب الله.
                  </p>


                </div>
                <div className={styles.goal}>
                  <div className={styles.icon_container}>
                    <img src="/assets/svgs/checkd.svg" alt="" />
                  </div>
                  <p>دعم صاحبات الظروف الخاصة في حفظ كتاب الله.</p>


                </div>
                <div className={styles.goal}>
                  <div className={styles.icon_container}>
                    <img src="/assets/svgs/checkd.svg" alt="" />
                  </div>
                  <p>تسهيل حفظ كتاب الله لجميع المسلمين في مختلف أنحاء العالم.</p>


                </div>



              </motion.div>

            </div>
          </div>


          <div className="container">
            <div className={styles.target}>


              <motion.div initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, type: "tween" }} className={styles.desc}>
                <p>الأفراد الذين يواجهون صعوبة في الانتظام في المدارس وحلقات التحفيظ النسائية لتعليم القرآن، سواء داخل المملكة العربية السعودية أو خارجها، الراغبين في تعلم القرآن</p>
              </motion.div>


              <motion.div initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "tween" }} className={styles.img_container}>
                <img src={'/assets/imgs/reading_target.jpg'} alt="" />

                <div className={styles.title}>
                  <h4>الفئة المستهدفة</h4>
                </div>
              </motion.div>


            </div>
          </div>
        </section>

      </main>
      <Footer dataImages={dataImages} />

    </>
  )
}

export default Reading