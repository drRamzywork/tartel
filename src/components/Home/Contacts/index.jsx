import React from 'react'
import { MdLocationOn, MdMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Contacts = () => {
  return (
    <section id='contact' className='contact'>
      <div className="container">
        <div className="section_title">
          <div className="title"><h1>
            تواصل معنا
          </h1></div>

          <div className="desc">
            <p>للتواصل مع مركز ترتيل، يرجى الاتصال بنا عبر البريد الإلكتروني أو الهاتف أو زيارة مقرنا . </p>
          </div>


        </div>


        <div className="boxes_container">
          <div className="box">

            <div className="shape">
              <div className="icon_container">
                <MdMailOutline />
              </div>
            </div>


            <div className="box_title">
              <p>البريد الالكتروني</p>
            </div>

            <div className="desc">
              <p>Tarteel_saudi@gmail.com</p>
            </div>


          </div>

          <div className="box">

            <div className="shape">
              <div className="icon_container">
                <IoCallOutline />
              </div>
            </div>


            <div className="box_title">
              <p>رقم الهاتف</p>
            </div>

            <div className="desc">
              <p>+96665147896 / +96665125478</p>
            </div>


          </div>

          <div className="box">

            <div className="shape">
              <div className="icon_container">
                <MdLocationOn />
              </div>
            </div>


            <div className="box_title">
              <p>الموقع</p>
            </div>

            <div className="desc">
              <p>السعودية / محافظة الخرج</p>
            </div>


          </div>


        </div>


      </div>
    </section>
  )
}

export default Contacts