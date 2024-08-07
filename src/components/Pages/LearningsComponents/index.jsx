import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import HeaderPages from '../HeaderPages'
import Link from 'next/link'
import { IoArrowUpOutline } from "react-icons/io5";
import styles from './index.module.scss';
import { motion } from 'framer-motion'

const LearningsComponents = ({ dataImages, dataAllTopics }) => {
  const mainImg = dataImages.images.learning.image;
  const mainTitle = dataImages.images.learning.name;

  return (
    <>
      <Navbar dataImages={dataImages} />
      <main>
        <HeaderPages

          mainImg={mainImg}
          mainTitle={mainTitle}
        />

        <section id='learning' className={styles.learning}>
          <div className={styles.bg_contaienr}>
            <img src="/assets/svgs/sections_bg.svg" alt="" />
          </div>
          <div className="container">

            <div className={styles.boxes_container}>



              {dataAllTopics.map((topic, idx) =>
                <Link href={`/details/${topic.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}
                    transition={{ duration: 1, type: "tween" }}

                    className={styles.box} key={idx}>
                    <div className={styles.img_container}>
                      <img src={topic.image} alt="" />

                      <div className={styles.title}>
                        <h4>{topic.title}</h4>
                      </div>
                    </div>

                    <div className={styles.desc}>
                      <p>{topic.short_desc}</p>
                    </div>

                    <div className={styles.more_btn}>
                      <Link href={`/details/${topic.slug}`}>إقرأ المزيد</Link>
                      <div className={styles.icon_container}>
                        <IoArrowUpOutline />
                      </div>
                    </div>
                  </motion.div>
                </Link>

              )}
            </div>


          </div>

        </section>
      </main>

      <Footer dataImages={dataImages} />
    </>
  )
}

export default LearningsComponents