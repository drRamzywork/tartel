// import React, { useEffect, useState } from 'react'
// import styles from './index.module.scss';
// import { motion } from 'framer-motion';

// const Partners = ({ partners }) => {
//   const [currentLogo, setCurrentLogo] = useState(0);

//   useEffect(() => {
//     if (currentLogo < partners.length) {
//       const timer = setTimeout(() => {
//         setCurrentLogo(currentLogo + 1);
//       }, 500); // Adjust the duration to control the delay between animations
//       return () => clearTimeout(timer);
//     }
//   }, [currentLogo, partners.length]);

//   return (
//     <>
//       <section id='partners' className={styles.partners}>
//         <div className="container">
//           <motion.div initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, type: "tween" }} className={styles.sec_title}>
//             <h1>جهات نتشارك معها النجاح</h1>
//           </motion.div>

//           <div className={styles.section_container}>
//             {partners.map((partner, idx) =>
//               <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={currentLogo > idx ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, type: 'tween' }} className={styles.logo} key={idx}>
//                 <img src={`https://admin.tarteel.org.sa/storage/${partner.image}`} alt={partner.name} />
//               </motion.div>
//             )}
//           </div>

//         </div>
//       </section>
//     </>
//   )
// }

// export default Partners
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './index.module.scss';

const Partners = ({ partners }) => {
  const [currentLogo, setCurrentLogo] = useState(-1);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView && currentLogo < partners.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLogo(currentLogo + 1);
      }, 500); // Adjust the duration to control the delay between animations
      return () => clearTimeout(timer);
    }
  }, [inView, currentLogo, partners.length]);

  return (
    <section id='partners' className={styles.partners} ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, type: "tween" }} className={styles.sec_title}>
          <h1>جهات نتشارك معها النجاح</h1>
        </motion.div>

        <div className={styles.section_container}>
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: -20 }}
              animate={currentLogo >= idx ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, type: 'tween' }}
              className={styles.logo}
            >
              <img src={`https://admin.tarteel.org.sa/storage/${partner.image}`} alt={partner.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
