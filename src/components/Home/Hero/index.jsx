import React from 'react'
import styels from './index.module.scss'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section id='hero' className={styels.hero}>
        <div className={styels.hero_container}>
          <div className={styels.img_container}>
            <img src={'/assets/svgs/quran_hero.svg'} alt='' />
          </div>

          <div className={styels.content_container}>
            <img src={'/assets/svgs/shape_hero.svg'} alt='' />
            <div className={styels.bg2} >

              {/* <div className={styels.layer} /> */}

            </div>


            <div className="container">
              <div className={styels.text}>
                <div className={styels.title}>
                  <h1>خيركم من تعلم القرآن وعلمه</h1>
                </div>

                <div className={styels.desc}><p>نسعى في "مركز ترتيل" مع نخبة من المتخصصين المجازين إلى تيسير حفظ القرآن الكريم وضبطه، وإتقان قواعده وأحكامه، وتعليمه على الوجه الصحيح، لجميع المسلمين في شتى أنحاء العالم.</p></div>


                <div className={styels.join_btn}>
                  <button>انضم الى عائلتنا</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>



      <div className="container">
        <div className={styels.news}>
          <div className={styels.boxes_container}>

            <div className={styels.box}>
              <div className={styels.box_inner}>
                <div className={styels.num}>
                  100+
                </div>

                <div className={styels.text}>
                  <div className={styels.img_container}>
                    <img src='/assets/svgs/file_text_hero_icon.svg' />
                  </div>

                  <div className={styels.box_title}>
                    <p>دورات تدريبية</p>
                  </div>
                </div>
              </div>
            </div>


            <div className={styels.box}>

              <div className={styels.box_inner}>
                <div className={styels.num}>
                  150+
                </div>

                <div className={styels.text}>
                  <div className={styels.img_container}>
                    <img src='/assets/svgs/users_hero_icon.svg' />
                  </div>

                  <div className={styels.box_title}>
                    <p>معلمين للقرآن</p>
                  </div>
                </div>
              </div>

            </div>

            <div className={styels.box}>
              <div className={styels.box_inner}>
                <div className={styels.num}>
                  5.5k+
                </div>

                <div className={styels.text}>
                  <div className={styels.img_container}>
                    <img src='/assets/svgs/smile_hero_icon.svg' />
                  </div>

                  <div className={styels.box_title}>
                    <p>طالبة</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styels.box}>
              <div className={styels.box_inner}>
                <div className={styels.num}>
                  7.0k+
                </div>

                <div className={styels.text}>
                  <div className={styels.img_container}>
                    <img src='/assets/svgs/alarm_hero_icon.svg' />
                  </div>

                  <div className={styels.box_title}>
                    <p>ساعات تدريب</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Hero