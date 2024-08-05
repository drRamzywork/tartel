import React from 'react'
import styles from './index.module.scss';
import { motion } from 'framer-motion';

const OurGoals = ({ dataGoals, goals_desc }) => {
  return (
    <section id='our_goals' className={styles.our_goals}>
      <div className={styles.goals_bg}>
        <img src="/assets/svgs/our_goals_bg_sec.svg" alt="" />
      </div>


      <div className="container">
        <div className={styles.sec_container}>

          <div className={styles.text_container}>

            <motion.div initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween" }} className={styles.title}>
              <h1>أهدافنا</h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "tween" }} className={styles.desc}>
              <p>
                {goals_desc}
              </p>
            </motion.div>
          </div>

          <div className={styles.goals_container}>




            {Object.keys(dataGoals).map((key, index) => (
              <motion.div initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween" }}
                key={index} className={styles.goal}>
                <div className={styles.icon_container}>
                  <img src="/assets/svgs/checkd.svg" alt="" />
                </div>
                <div className={styles.title}>
                  <p>{dataGoals[key]}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}

export default OurGoals