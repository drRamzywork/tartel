import React from 'react'
import styles from './index.module.scss';

const Web = () => {
  return (
    <>
      <section id='web' className={styles.web}>
        <div className={styles.img_container}>
          <img src="/assets/imgs/masjd.jpeg" alt="" />
        </div>
        <div className="container">
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
        </div>
      </section>
    </>
  )
}

export default Web