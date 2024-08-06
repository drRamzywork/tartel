import React, { useEffect, useState } from 'react';
import { MdLocationOn, MdMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { motion } from 'framer-motion';
import styles from './index.module.scss';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-hot-toast';

const MapWithNoSSR = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

const Contacts = ({ dataImages }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.promise(
      fetch('https://api.tarteel.org.sa/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to send message');
          }
          return response.json();
        })
        .then((data) => {
          setName('');
          setPhone('');
          setEmail('');
          setMessage('');
        }),
      {
        loading: 'جاري لإرسال...',
        success: <b>تم اللإرسال سنتواصل معك قريبا شكراً لك.</b>,
        error: <b>فشل الإرسال حاول في وقت أخر.</b>,
      }
    );
  };


  const [currentBox, setCurrentBox] = useState(-1);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && currentBox < 2) {
      const timer = setTimeout(() => {
        setCurrentBox(currentBox + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inView, currentBox]);

  const boxes = [
    {
      icon: <MdMailOutline />,
      title: dataImages.items.gmail.name,
      desc: dataImages.items.gmail.text
    },
    {
      icon: <IoCallOutline />,
      title: dataImages.items.phone.name,
      desc: dataImages.items.phone.text
    },
    {
      icon: <MdLocationOn />,
      title: dataImages.items.location.name,
      desc: dataImages.items.location.text
    }
  ];

  return (
    <section id='contact' className={styles.contact}>
      <div className="container">
        <motion.div initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween" }} className={styles.section_title}>
          <div className={styles.title}><h1>تواصل معنا</h1></div>
          <div className={styles.desc}>
            <p>للتواصل مع مركز ترتيل، يرجى الاتصال بنا عبر البريد الإلكتروني أو الهاتف أو زيارة مقرنا.</p>
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
              <div className={styles.icon_container}>{box.icon}</div>
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
          <div className={styles.title}><h1>ارسل رسالتك</h1></div>
          <div className={styles.desc}>
            <p>نحن هنا للإجابة على استفساراتكم ومساعدتكم في جميع ما تحتاجونه.</p>
          </div>
        </motion.div>

        <div className={styles.form_section_container}>
          <form onSubmit={handleSubmit}>
            <div className={styles.input_container}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder='الاسم'
              />
              <div className={styles.icon_container}>
                <CiUser />
              </div>
            </div>
            <div className={styles.input_container}>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder='رقم الجوال'
              />
              <div className={styles.icon_container}>
                <IoCallOutline />
              </div>
            </div>
            <div className={styles.input_container}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='البريد الالكتروني'
              />
              <div className={styles.icon_container}>
                <MdMailOutline />
              </div>
            </div>
            <div className={styles.input_container}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='رسالتك'
                required
              />
            </div>
            <div className={styles.send_btn}>
              <button type='submit'>ارسل رسالتك</button>
            </div>
          </form>
          <div className={styles.map_container}>
            <MapWithNoSSR dataImages={dataImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
