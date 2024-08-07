import React, { useEffect } from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const HeaderPages = ({ mainImg, mainTitle, mainFullDesc }) => {
  const router = useRouter()

  return (
    <div id='pages_hero' className={styles.pages_hero}>
      <div className={styles.hero_container}>
        <div className={styles.main_image}>
          <img src={mainImg} alt={mainTitle} />
          <img className={styles.sec_img} src="/assets/svgs/headerShapePages.svg" alt="" />
        </div>


        <div className="container ">
          <motion.div initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 1, type: "tween" }}

            className={`${styles.text_container} ${router.pathname.includes('learning') && styles.text_containerLearn}`}>
            <div className={styles.title}>
              <h1>{mainTitle}</h1>
            </div>

            <div className={styles.desc}>
              <p>{mainFullDesc}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPages;
