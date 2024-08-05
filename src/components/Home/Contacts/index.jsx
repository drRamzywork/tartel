import React from 'react'
import { MdLocationOn, MdMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import styles from './index.module.scss'
const Contacts = () => {
  return (
    <section id='contact' className={styles.contact}>
      <div className="container">
        <div className={styles.section_title}>
          <div className={styles.title}><h1>
            تواصل معنا
          </h1></div>

          <div className={styles.desc}>
            <p>للتواصل مع مركز ترتيل، يرجى الاتصال بنا عبر البريد الإلكتروني أو الهاتف أو زيارة مقرنا . </p>
          </div>


        </div>


        <div className={styles.boxes_container}>
          <div className={styles.box}>

            <div className={styles.icon_container}>
              <MdMailOutline />
            </div>


            <div className={styles.box_title}>
              <p>البريد الالكتروني</p>
            </div>

            <div className={styles.desc}>
              <p>Tarteel_saudi@gmail.com</p>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.icon_container}>
              <IoCallOutline />
            </div>

            <div className={styles.box_title}>
              <p>رقم الهاتف</p>
            </div>

            <div className={styles.desc}>
              <p>+96665147896 / +96665125478</p>
            </div>

          </div>

          <div className={styles.box}>
            <div className={styles.icon_container}>
              <MdLocationOn />
            </div>


            <div className={styles.box_title}>
              <p>الموقع</p>
            </div>

            <div className={styles.desc}>
              <p>السعودية / محافظة الخرج</p>
            </div>


          </div>
        </div>



        <div className={styles.section_title}>
          <div className={styles.title}><h1>
            ارسل رسالتك
          </h1></div>

          <div className={styles.desc}>
            <p>
              نحن هنا للإجابة على استفساراتكم ومساعدتكم في جميع ما تحتاجونه.
            </p>
          </div>


        </div>


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
            <img src="/assets/imgs/map.png" alt="" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contacts