
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.scss';
import useCounter from '@/hooks/useCounter';
import Link from 'next/link';
import UserHero from '@/components/assets/svgs/UserHero';

import { MdOutlineAlarmOn } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";

const SequentialAnimations = ({ hero_imageData }) => {
  const [currentBox, setCurrentBox] = useState(0);

  const boxes = [
    { number: 100, text: 'دورات تدريبية', imgSrc: <IoDocumentTextOutline /> },
    { number: 150, text: 'معلمين للقرآن', imgSrc: <UserHero /> },
    { number: 5500, text: 'طالبة', imgSrc: <FaRegSmile /> },
    { number: 7000, text: 'ساعات تدريب', imgSrc: <MdOutlineAlarmOn /> },
  ];

  useEffect(() => {
    if (currentBox < boxes.length) {
      const timer = setTimeout(() => {
        setCurrentBox(currentBox + 1);
      }, 1000); // Adjust the duration to control the delay between animations
      return () => clearTimeout(timer);
    }
  }, [currentBox]);


  const convertToArabicNumerals = (number) => {
    const arabicNumbers = '٠١٢٣٤٥٦٧٨٩';
    return number.toString().split('').map(digit => arabicNumbers[digit]).join('');
  };


  return (
    <>
      <section id='hero' className={styles.hero}>
        <div className={styles.hero_container}>
          <div className={styles.img_container}>
            <img src={hero_imageData.images?.hero_image.image} alt={hero_imageData.images?.hero_image.name} />
          </div>
          <div className={styles.content_container}>
            <img src={'/assets/svgs/shape_hero.svg'} alt='' />
            <div className={styles.bg2}></div>
            <div className="container">
              <div className={styles.text}>
                <motion.div initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, type: "tween" }} className={styles.title}>
                  <h1>{hero_imageData?.items?.hero_title?.text}</h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, type: "tween" }}
                  className={styles.desc}>
                  <p>{hero_imageData?.items?.hero_desc?.text}</p>
                </motion.div>
                <motion.div className={styles.join_btn} initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, type: "tween" }}>
                  <Link href={`${hero_imageData?.items?.hero_btn?.text}`}>
                    <button>{hero_imageData?.items?.hero_btn?.name}</button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className={styles.news}>
          <div className={styles.boxes_container}>
            {boxes.map((box, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -60 }}
                animate={currentBox > index ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, type: 'tween' }}
                className={styles.box}
              >
                <div className={styles.box_inner}>
                  <div className={styles.num}>
                    +{convertToArabicNumerals(useCounter(box.number, currentBox > index))}
                  </div>
                  <div className={styles.text}>
                    <div className={styles.img_container}>
                      {box.imgSrc}
                    </div>
                    <div className={styles.box_title}>
                      <p>{box.text}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SequentialAnimations;
