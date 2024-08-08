import React from 'react'
import styles from './index.module.scss';
import { motion } from 'framer-motion';


const Web = ({ electronic_readingData }) => {
  return (
    <>
      <section id='web' className={styles.web}>
        <div className={styles.img_container}>
          <img src={electronic_readingData.images.electronic_reading.image} alt="" />
        </div>
        <motion.div initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween" }} className="container">
          <div className={styles.section_container}>
            <div className={styles.sec_title}>
              <h1>{electronic_readingData?.items?.electronic_reading.name}</h1>
            </div>

            <div className={styles.desc}>
              <p>
                {electronic_readingData?.items?.electronic_reading.text}
              </p>
            </div>

            <div className={styles.btn_container}>
              <a href={`${electronic_readingData?.items?.btn_electronic_reading?.name}`}>


                <button>
                  {electronic_readingData?.items?.btn_electronic_reading?.text}
                </button>
              </a>
            </div>


          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Web