import React from 'react'
import styles from './index.module.scss'
import { motion } from 'framer-motion'


const WhoWeAre = ({ who_we_are, our_messages }) => {

  console.log(who_we_are)
  return (
    <section className={styles.who_we_are} id='who_we_are'>

      <div className={styles.section_bg}>
        <img src="/assets/svgs/sections_bg.svg" alt="" />
      </div>



      <div className="container">
        <div className={styles.section_container}>

          <div className={styles.text_container}>
            <motion.div initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween" }} className={styles.main_section_title}>
              <div className={styles.title}>
                <h1>
                  من نحن
                </h1>
              </div>

              <div className={styles.icon_container}>
                <img src="/assets/svgs/sections_shape.svg" alt="" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              transition={{ duration: 1.5, type: "tween" }} className={styles.sec_title}>
              <div className={styles.title}>
                <h1>مرحبا بك في مركز ترتيل</h1>
              </div>
            </motion.div>

            <div className={styles.main_desc}>
              <p>مركز "ترتيل" هو وقف تأسس في المملكة العربية السعودية، تحديدًا بمحافظة الخرج، في عام 1444هـ. مرخص من الهيئة العامة للأوقاف برقم (4122)</p>
            </div>

            <div className={styles.our_vision}>
              <motion.div initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween" }} className={styles.title}>
                <h2>رؤيتنا</h2>
              </motion.div>


              <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "tween" }} className={styles.desc}>
                <p>أن يكون مركز ترتيل مركزًا تعليميًا تربويًا رائدًا في إعداد معلمات القرآن الكريم، من خلال تقديم برامج تعليمية متميزة تركز على الجودة والكفاءة في المخرجات التعليمية، وتطوير مهارات المعلمات في تعليم القرآن الكريم، وذلك للمساهمة في نشر وتعزيز تعليم القرآن الكريم بأعلى المستويات في جميع أنحاء العالم.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "tween" }} className={styles.join_us_btn}>
                <button>انضم الى عائلتنا</button>
              </motion.div>
            </div>


          </div>

          <motion.div initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "tween" }} className={styles.sec_img_container}>
            <div className={styles.main_img_bg}>
              <img src="/assets/svgs/dots_bg.svg" alt="" />

            </div>
            <div className={styles.main_image_container}>
              <img className={styles.main_image} src={who_we_are.image} alt="" />
              <div className={styles.sticker}>
                <div className={styles.shape}>
                  <img src="/assets/svgs/star.svg" alt="" />
                </div>

                <p >
                  <span>مركز</span>
                  نسائي
                </p >



              </div>
            </div>


          </motion.div>






        </div>



        <div className={styles.our_message}>




          <div className={styles.section_container}>
            <div className={styles.main_img_bg_bottom}>
              <img src="/assets/svgs/dots_bg.svg" alt="" />
            </div>

            <div className={styles.img_container}>
              <img src={our_messages.image} alt={our_messages.name} />
            </div>


            <div className={styles.text_contaienr}>

              <motion.div initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween" }} className={styles.title}>
                <h2>رسالتنا</h2>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween" }} className={styles.desc}>
                <p>تعليم القرآن الكريم على الوجه الصحيح لجميع المسلمين والمسلمات من جميع أنحاء العالم حفظًا وتلاوةً عبر مراكز متخصصة وبيئات محفزة وفق معايير التميز المؤسسي في العمل الخيري.</p>

              </motion.div>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default WhoWeAre