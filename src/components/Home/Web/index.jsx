import React from 'react'
import styles from './index.module.scss';
import { motion } from 'framer-motion';


const Web = ({ electronic_reading }) => {
  return (
    <>
      <section id='web' className={styles.web}>
        <div className={styles.img_container}>
          <img src={electronic_reading.image} alt="" />
        </div>
        <motion.div initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween" }} className="container">
          <div className={styles.section_container}>
            <div className={styles.sec_title}>
              <h1>المتجر الالكتروني</h1>
            </div>

            <div className={styles.desc}>
              <p>
                يوفر متجر مركز "ترتيل" الإلكتروني مجموعة متنوعة من المنتجات التي تساهم في دعم وتحفيظ القرآن الكريم، تشمل المصاحف، الكتب التعليمية، وأدوات تعليمية مبتكرة. كما يقدم المتجر خيارات متعددة للتبرعات والاستقطاع لدعم برامج المركز ومشاريعه الخيرية.
              </p>
            </div>

            <div className={styles.btn_container}>
              <button>
                التبرع  للمركز
              </button>
            </div>


          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Web