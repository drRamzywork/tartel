import React from 'react'
import styles from './index.module.scss'
const Partners = () => {
  return (
    <>
      <section id='partners' className={styles.partners}>
        <div className="container">
          <div className={styles.sec_title}>
            <h1>جهات نتشارك معها النجاح</h1>
          </div>

          <div className={styles.section_container}>

            <div className={styles.logo}>
              <img src="/assets/imgs/partners.png" alt="" />
            </div>
            <div className={styles.logo}>
              <img src="/assets/imgs/partners.png" alt="" />
            </div>
            <div className={styles.logo}>
              <img src="/assets/imgs/partners.png" alt="" />
            </div>
            <div className={styles.logo}>
              <img src="/assets/imgs/partners.png" alt="" />
            </div>
            <div className={styles.logo}>
              <img src="/assets/imgs/partners.png" alt="" />
            </div>
            <div className={styles.logo}>
              <img src="/assets/imgs/partners.png" alt="" />
            </div>
            <div className={styles.logo}>
              <img src="/assets/imgs/partners.png" alt="" />
            </div>
            <div className={styles.logo}>
              <img src="/assets/imgs/partners.png" alt="" />
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Partners