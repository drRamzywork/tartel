import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import HeaderPages from '../HeaderPages'
import styles from './index.module.scss';

const DetailsComponents = ({ dataImages, dataDetailsData }) => {

  const mainImg = dataDetailsData.image;
  const mainTitle = dataDetailsData.title;
  const mainFullDesc = dataDetailsData.full_desc;

  const createMarkup = (html) => {
    return { __html: html };
  };


  return (
    <>
      <Navbar className={true} dataImages={dataImages} />
      <main id={styles.details}>
        <HeaderPages
          mainImg={mainImg}
          mainTitle={mainTitle}
          mainFullDesc={mainFullDesc}
        />

        <section id='goals_section' className={styles.goals_section}>
          <div className={styles.bg_contaienr}>
            <img src="/assets/svgs/sections_bg.svg" alt="" />
          </div>

          <div className="container">
            <div className={styles.section_container}>
              {dataDetailsData?.content.map((content, idx) => (
                <div className={styles.contents_container} key={idx}>
                  <div className={styles.title}>
                    <h2>
                      {content.base_title}
                    </h2>
                  </div>

                  <div className={styles.sub_content}>
                    {content.sub_content.map((sub, index) => (
                      <div key={index} className={styles.text_container}>
                        <div className={styles.sub_title}>
                          <div className={styles.icon_container}>
                            <img src="/assets/svgs/detailsTitleShape.svg" alt="" />
                          </div>
                          <h3>
                            {sub.title}
                          </h3>
                        </div>
                        <div className={styles.sub_desc}>
                          <div dangerouslySetInnerHTML={createMarkup(sub.text)} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer dataImages={dataImages} />
    </>
  )
}

export default DetailsComponents