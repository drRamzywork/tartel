import React, { useEffect } from 'react';
import styles from './index.module.scss';

const HeaderPages = ({ mainImg, mainTitle, mainFullDesc }) => {


  return (
    <div id='pages_hero' className={styles.pages_hero}>
      <div className={styles.hero_container}>
        <div className={styles.main_image}>
          <img src={mainImg} alt={mainTitle} />
          <img className={styles.sec_img} src="/assets/svgs/headerShapePages.svg" alt="" />
        </div>


        <div className="container ">
          <div className={styles.text_container}>
            <div className={styles.title}>
              <h1>{mainTitle}</h1>
            </div>

            <div className={styles.desc}>
              <p>{mainFullDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPages;
