// import React, { useEffect, useState } from 'react'
// import styels from './index.module.scss'
// import { motion } from 'framer-motion'
// import useCounter from '@/hooks/useCounter';

// const Hero = ({ hero_image }) => {


//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (start) {
//       let current = 0;
//       const increment = endValue / 100; // adjust this value to control the speed of the counter
//       const interval = setInterval(() => {
//         current += increment;
//         if (current >= endValue) {
//           clearInterval(interval);
//           setCount(endValue);
//         } else {
//           setCount(current);
//         }
//       }, 10); // adjust this value to control the update frequency
//       return () => clearInterval(interval);
//     }
//   }, [start, endValue]);

//   return Math.round(count);
// };

// const SequentialAnimations = () => {
//   const [currentBox, setCurrentBox] = useState(0);

//   const boxes = [
//     { number: 100, text: 'دورات تدريبية', imgSrc: '/assets/svgs/file_text_hero_icon.svg' },
//     { number: 150, text: 'معلمين للقرآن', imgSrc: '/assets/svgs/users_hero_icon.svg' },
//     { number: 5500, text: 'طالبة', imgSrc: '/assets/svgs/smile_hero_icon.svg' },
//     { number: 7000, text: 'ساعات تدريب', imgSrc: '/assets/svgs/alarm_hero_icon.svg' },
//   ];

//   useEffect(() => {
//     if (currentBox < boxes.length) {
//       const timer = setTimeout(() => {
//         setCurrentBox(currentBox + 1);
//       }, 2000); // adjust the duration to control the delay between animations
//       return () => clearTimeout(timer);
//     }
//   }, [currentBox]);



//   return (
//     <>
//       <section id='hero' className={styels.hero}>
//         <div className={styels.hero_container}>

//           <div

//             className={styels.img_container}>
//             <img src={hero_image.image} alt={hero_image.name} />
//           </div>

//           <div className={styels.content_container}>
//             <img src={'/assets/svgs/shape_hero.svg'} alt='' />
//             <div className={styels.bg2} >


//             </div>


//             <div className="container">
//               <div className={styels.text}>

//                 <motion.div initial={{ opacity: 0, y: -60 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1.5, type: "tween" }} className={styels.title}>
//                   <h1>خيركم من تعلم القرآن وعلمه</h1>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, }}
//                   whileInView={{ opacity: 1, }}
//                   transition={{ duration: 1.5, type: "tween" }}
//                   className={styels.desc}><p>نسعى في "مركز ترتيل" مع نخبة من المتخصصين المجازين إلى تيسير حفظ القرآن الكريم وضبطه، وإتقان قواعده وأحكامه، وتعليمه على الوجه الصحيح، لجميع المسلمين في شتى أنحاء العالم.</p></motion.div>


//                 <motion.div className={styels.join_btn} initial={{ opacity: 0, y: 60 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1.5, type: "tween" }}>
//                   <button>انضم الى عائلتنا</button>
//                 </motion.div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section >



//       <div className="container">
//         <div className={styels.news}>
//           <div className={styels.boxes_container}>

//             <motion.div initial={{ opacity: 0, y: -60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.5, type: "tween" }} className={styels.box}>
//               <div className={styels.box_inner}>
//                 <div className={styels.num}>
//                   100+
//                 </div>

//                 <div className={styels.text}>
//                   <div className={styels.img_container}>
//                     <img src='/assets/svgs/file_text_hero_icon.svg' />
//                   </div>

//                   <div className={styels.box_title}>
//                     <p>دورات تدريبية</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, y: -60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.5, type: "tween" }} className={styels.box}>

//               <div className={styels.box_inner}>
//                 <div className={styels.num}>
//                   150+
//                 </div>

//                 <div className={styels.text}>
//                   <div className={styels.img_container}>
//                     <img src='/assets/svgs/users_hero_icon.svg' />
//                   </div>

//                   <div className={styels.box_title}>
//                     <p>معلمين للقرآن</p>
//                   </div>
//                 </div>
//               </div>

//             </motion.div>

//             <motion.div initial={{ opacity: 0, y: -60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.5, type: "tween" }} className={styels.box}>
//               <div className={styels.box_inner}>
//                 <div className={styels.num}>
//                   5.5k+
//                 </div>

//                 <div className={styels.text}>
//                   <div className={styels.img_container}>
//                     <img src='/assets/svgs/smile_hero_icon.svg' />
//                   </div>

//                   <div className={styels.box_title}>
//                     <p>طالبة</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, y: -60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.5, type: "tween" }} className={styels.box}>
//               <div className={styels.box_inner}>
//                 <div className={styels.num}>
//                   7.0k+
//                 </div>

//                 <div className={styels.text}>
//                   <div className={styels.img_container}>
//                     <img src='/assets/svgs/alarm_hero_icon.svg' />
//                   </div>

//                   <div className={styels.box_title}>
//                     <p>ساعات تدريب</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//       </div>

//     </>
//   )
// }

// export default Hero



import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.scss';
import useCounter from '@/hooks/useCounter';
import Link from 'next/link';
const SequentialAnimations = ({ hero_imageData }) => {
  const [currentBox, setCurrentBox] = useState(0);

  const boxes = [
    { number: 100, text: 'دورات تدريبية', imgSrc: '/assets/svgs/file_text_hero_icon.svg' },
    { number: 150, text: 'معلمين للقرآن', imgSrc: '/assets/svgs/users_hero_icon.svg' },
    { number: 5500, text: 'طالبة', imgSrc: '/assets/svgs/smile_hero_icon.svg' },
    { number: 7000, text: 'ساعات تدريب', imgSrc: '/assets/svgs/alarm_hero_icon.svg' },
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
                      <img src={box.imgSrc} alt={box.text} />
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
