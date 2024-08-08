



import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from 'next/router';




const NavbarMobile = ({ dataImages }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');
  const [menu, setMenu] = useState(false);


  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 50 },
  };
  const lineVariants = {
    burger: {
      rotate: 0,
      translateY: 0,
      opacity: 1,
    },
    cross: {
      rotate: 45,
      translateY: [0, 6, 6],
      opacity: {
        0: 1,
        1: 0,
        2: 1,
      },
    },
  };

  const middleLineVariants = {
    burger: {
      opacity: 1,
    },
    cross: {
      opacity: 0,
    },
  };

  const bottomLineVariants = {
    burger: {
      rotate: 0,
      translateY: 0,
    },
    cross: {
      rotate: -45,
      translateY: -6,
    },
  };


  const menuRef = useRef(null);




  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);




  const handleClick = (id) => {
    setMenu(false)
    if (id.startsWith('#')) {
      const sectionId = id.substring(1);
      document.getElementById(sectionId)

      router.push(`#${sectionId}`)
    } else {
      router.push(id);
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const top = section.offsetTop - 50;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveLink(section.getAttribute('id'));
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.navbar_mobile}
    >

      <div className={styles.burger_icon} onClick={() => setMenu(prev => !prev)}>
        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top line */}
          <motion.path
            d="M1.39014 1H17.3901"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            variants={lineVariants}
            animate={menu ? "cross" : "burger"}
          />
          {/* Middle line */}
          <motion.path
            d="M1.39014 7H17.3901"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            variants={middleLineVariants}
            animate={menu ? "cross" : "burger"}
          />
          {/* Bottom line */}
          <motion.path
            d="M1.39014 13H17.3901"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            variants={bottomLineVariants}
            animate={menu ? "cross" : "burger"}
          />
        </svg>
      </div>




      {menu &&
        <motion.div initial="closed"
          animate={menu ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.5, type: "tween" }} className={styles.meunu_container}>
          <ul>
            <li className={activeLink === 'home' ? 'active' : ''}>
              <a onClick={() => handleClick('/')}>
                الرئيسية
              </a>
            </li>
            <li className={activeLink === 'our_news' ? 'active' : ''}>
              <a onClick={() => handleClick('/#our_news')}>
                أخبارنا وفعاليتنا
              </a>
            </li>
            <li className={activeLink === 'trainings' ? 'active' : ''}>
              <a onClick={() => handleClick('/#trainings')}>
                الدورات
              </a>
            </li>
            <li className={activeLink === 'web' ? 'active' : ''}>
              <a onClick={() => handleClick('/#web')}>
                المتجر الإلكتروني
              </a>
            </li>
            <li className={`${styles.menu} ${router.pathname === '/electronic-reading' && styles.active}`}>
              <Link href={'/electronic-reading'} onClick={() => setMenu(false)}>
                <p>
                  المقرأه الالكترونية
                </p>
              </Link>
            </li>

            <li
              className={`${styles.menu} ${router.pathname === '/learning' && styles.active}`} >
              <Link href={'/learning'} onClick={() => setMenu(false)}>
                <p>
                  التعليم
                </p>
              </Link>

            </li>

            <li className={activeLink === 'who_we_are' ? 'active' : ''} onClick={() => setMenu(false)}>
              <a onClick={() => handleClick('/#who_we_are')}>
                عن المركز
              </a>
            </li>






          </ul>
        </motion.div>
      }



      <Link href={"/#"} className={styles.logo}>
        <img src="/assets/svgs/white_logo.svg" alt="" />
      </Link>


      <div className={styles.join_us}>
        <button>
          <Link href={`${dataImages.items.hero_btn.text}`}>
            <Image src={'/assets/svgs/account_circle.svg'} width={20} height={20} />
          </Link>
        </button>
      </div>
    </motion.div>


  );
};

export default NavbarMobile;
