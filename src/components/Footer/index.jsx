import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer id='footer' className={styles.footer}>
      <motion.div initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: "tween" }} className={styles.img_container}>
        <img src="/assets/svgs/mosque.svg" alt="" />
      </motion.div>



      <div className="container">
        <div className={styles.section_container}>
          <div className={styles.logo}>
            <img src="assets/svgs/white_logo.svg" alt="" />
          </div>



          <div className={styles.web_links}>
            <ul>
              <li>
                <Link href={'#'}>
                  الرئيسية
                </Link>

              </li>

              <li>
                <Link href={'#our_news'}>
                  أخبارنا وفعاليتنا
                </Link>
              </li>

              <li>
                <Link href={'#trainings'}>
                  الدورات
                </Link>
              </li>

              <li>
                <Link href={'#'}>
                  المتجر الإلكتروني
                </Link>

              </li>

              <li>
                <Link href={'#'}>
                  المقرأه الالكترونية
                </Link>
              </li>

              <li className={styles.menu}>
                <a >
                  <p>
                    التعليم
                  </p>
                </a>

                <IoIosArrowDown />
                <ul className={styles.drop_down}>

                  <li>
                    <Link href={'/learn'}>
                      التعليم النسائي
                    </Link>
                  </li>

                  <li>
                    <Link href={'/learn'}>
                      تعليم الأطفال
                    </Link>

                  </li>

                  <li>
                    <Link href={'/learn'}>
                      الخطط الدراسية
                    </Link>


                  </li>
                  <li>
                    <Link href={'/learn'}>
                      نور البيان
                    </Link>
                  </li>
                </ul>

              </li>


              <li className={styles.menu}>
                <a >
                  <p>
                    عن المركز
                  </p>
                </a>
                <IoIosArrowDown />
                <ul className={styles.drop_down}>

                  <li>
                    <Link href={'/learn'}>

                    </Link>

                  </li>

                  <li>
                    <Link href={'/learn'}>
                      تعليم الأطفال
                    </Link>

                  </li>
                  <li>
                    <Link href={'/learn'}>
                      الخطط الدراسية
                    </Link>


                  </li>
                  <li>
                    <Link href={'/learn'}>
                      نور البيان
                    </Link>
                  </li>
                </ul>
              </li>

            </ul>
          </div>


        </div>

        <hr />

        <div className={styles.socialmedia_links}>
          <div className={styles.imgs_container}>
            <img src="/assets/svgs/instagram.svg" alt="" />
            <img src="/assets/svgs/facebook.svg" alt="" />
            <img src="/assets/svgs/whatsapp.svg" alt="" />
            <img src="/assets/svgs/twitter.svg" alt="" />
          </div>

          <div className={styles.copyrights}>
            ©جميع الحقوق محفوظة لوقف ترتيل 2024
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer