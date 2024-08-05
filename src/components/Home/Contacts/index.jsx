// import React from 'react'
// import { MdLocationOn, MdMailOutline } from "react-icons/md";
// import { IoCallOutline } from "react-icons/io5";
// import { CiUser } from "react-icons/ci";
// import styles from './index.module.scss';
// import { motion } from 'framer-motion';

// const Contacts = () => {
//   return (
//     <section id='contact' className={styles.contact}>
//       <div className="container">
//         <motion.div initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, type: "tween" }} className={styles.section_title}>
//           <div className={styles.title}><h1>
//             تواصل معنا
//           </h1></div>

//           <div className={styles.desc}>
//             <p>للتواصل مع مركز ترتيل، يرجى الاتصال بنا عبر البريد الإلكتروني أو الهاتف أو زيارة مقرنا . </p>
//           </div>


//         </motion.div>


//         <div className={styles.boxes_container}>
//           <div className={styles.box}>

//             <div className={styles.icon_container}>
//               <MdMailOutline />
//             </div>


//             <div className={styles.box_title}>
//               <p>البريد الالكتروني</p>
//             </div>

//             <div className={styles.desc}>
//               <p>Tarteel_saudi@gmail.com</p>
//             </div>
//           </div>

//           <div className={styles.box}>
//             <div className={styles.icon_container}>
//               <IoCallOutline />
//             </div>

//             <div className={styles.box_title}>
//               <p>رقم الهاتف</p>
//             </div>

//             <div className={styles.desc}>
//               <p>+96665147896 / +96665125478</p>
//             </div>

//           </div>

//           <div className={styles.box}>
//             <div className={styles.icon_container}>
//               <MdLocationOn />
//             </div>


//             <div className={styles.box_title}>
//               <p>الموقع</p>
//             </div>

//             <div className={styles.desc}>
//               <p>السعودية / محافظة الخرج</p>
//             </div>


//           </div>
//         </div>



//         <div className={styles.section_title}>
//           <div className={styles.title}><h1>
//             ارسل رسالتك
//           </h1></div>

//           <div className={styles.desc}>
//             <p>
//               نحن هنا للإجابة على استفساراتكم ومساعدتكم في جميع ما تحتاجونه.
//             </p>
//           </div>


//         </div>


//         <div className={styles.form_section_container}>
//           <form action="">
//             <div className={styles.input_container}>
//               <input type="name" required placeholder='الاسم' />
//               <div className={styles.icon_container}>
//                 <CiUser />
//               </div>
//             </div>

//             <div className={styles.input_container}>
//               <input type="number" required placeholder='رقم الجوال' />
//               <div className={styles.icon_container}>
//                 <IoCallOutline />
//               </div>
//             </div>

//             <div className={styles.input_container}>
//               <input type="email" required placeholder='البريد الالكتروني' />
//               <div className={styles.icon_container}>
//                 <MdMailOutline />
//               </div>
//             </div>

//             <div className={styles.input_container}>
//               <textarea name="" placeholder='رسالتك' id=""></textarea>
//             </div>

//             <div className={styles.send_btn}>
//               <button type='send'>ارسل رسالتك</button>
//             </div>
//           </form>


//           <div className={styles.map_container}>
//             <img src="/assets/imgs/map.png" alt="" />
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contacts



import React, { useEffect, useState } from 'react';
import { MdLocationOn, MdMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { motion } from 'framer-motion';
import styles from './index.module.scss';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
// import Map from '@/components/Map';


const MapWithNoSSR = dynamic(() => import('@/components/Map'), {
  ssr: false,
});
const Contacts = () => {
  const [currentBox, setCurrentBox] = useState(-1);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView && currentBox < 2) {
      const timer = setTimeout(() => {
        setCurrentBox(currentBox + 1);
      }, 500); // Adjust the duration to control the delay between animations
      return () => clearTimeout(timer);
    }
  }, [inView, currentBox]);

  const boxes = [
    {
      icon: <MdMailOutline />,
      title: 'البريد الالكتروني',
      desc: 'Tarteel_saudi@gmail.com'
    },
    {
      icon: <IoCallOutline />,
      title: 'رقم الهاتف',
      desc: '+96665147896 / +96665125478'
    },
    {
      icon: <MdLocationOn />,
      title: 'الموقع',
      desc: 'السعودية / محافظة الخرج'
    }
  ];

  return (
    <section id='contact' className={styles.contact}>
      <div className="container">
        <motion.div initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween" }} className={styles.section_title}>
          <div className={styles.title}><h1>
            تواصل معنا
          </h1></div>
          <div className={styles.desc}>
            <p>للتواصل مع مركز ترتيل، يرجى الاتصال بنا عبر البريد الإلكتروني أو الهاتف أو زيارة مقرنا . </p>
          </div>
        </motion.div>

        <div className={styles.boxes_container} ref={ref}>
          {boxes.map((box, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: -20 }}
              animate={currentBox >= idx ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, type: 'tween' }}
              className={styles.box}
            >
              <div className={styles.icon_container}>
                {box.icon}
              </div>
              <div className={styles.box_title}>
                <p>{box.title}</p>
              </div>
              <div className={styles.desc}>
                <p>{box.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween" }} className={styles.section_title}>
          <div className={styles.title}><h1>
            ارسل رسالتك
          </h1></div>
          <div className={styles.desc}>
            <p>نحن هنا للإجابة على استفساراتكم ومساعدتكم في جميع ما تحتاجونه.</p>
          </div>
        </motion.div>

        <div className={styles.form_section_container}>
          <form action="">
            <div className={styles.input_container}>
              <input type="name" required placeholder='الاسم' />
              <div className={styles.icon_container}>
                <CiUser />
              </div>
            </div>
            <div className={styles.input_container}>
              <input type="number" required placeholder='رقم الجوال' />
              <div className={styles.icon_container}>
                <IoCallOutline />
              </div>
            </div>
            <div className={styles.input_container}>
              <input type="email" required placeholder='البريد الالكتروني' />
              <div className={styles.icon_container}>
                <MdMailOutline />
              </div>
            </div>
            <div className={styles.input_container}>
              <textarea name="" placeholder='رسالتك' id=""></textarea>
            </div>
            <div className={styles.send_btn}>
              <button type='send'>ارسل رسالتك</button>
            </div>
          </form>
          <div className={styles.map_container}>
            <MapWithNoSSR />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
