import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Navbar = ({ dataImages }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [about, setAbout] = useState(false);
  const [learnMenu, setLearnMenu] = useState(false);
  const router = useRouter();

  const containerAboutRef = useRef(null);
  const containerLearnMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
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

  useEffect(() => {
    const currentPath = router.pathname;
    const path = currentPath === '/' ? 'home' : currentPath.substring(1);
    setActiveLink(path);
  }, [router.pathname]);

  const handleClick = (id) => {
    if (id.startsWith('#')) {
      const sectionId = id.substring(1);
      document.getElementById(sectionId)

      router.push(`#${sectionId}`)
    } else {
      router.push(id);
    }
  };

  const handleClickOutside = (event) => {
    if (containerAboutRef.current && !containerAboutRef.current.contains(event.target)) {
      setAbout(false);
    }
    if (containerLearnMenuRef.current && !containerLearnMenuRef.current.contains(event.target)) {
      setLearnMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAboutClick = (event) => {
    setAbout((prev) => !prev);
  };

  const handleLearnMenuClick = (event) => {
    setLearnMenu(!learnMenu);
  };

  return (
    <nav id='navbar' className={styles.navbar}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`${styles.social_media_links} ${isScrolled ? styles.scrolled : ''}`}
      >
        <div className="container">
          <div className={styles.social_nav}>
            <div className={styles.icons_container}>
              <Link href={'#'} target='_blank' className={styles.icon}>
                <FaLinkedin />
              </Link>
              <Link href={'#'} target='_blank' className={styles.icon}>
                <IoLogoInstagram />
              </Link>
              <Link href={'#'} target='_blank' className={styles.icon}>
                <FaFacebook />
              </Link>
              <Link href={'#'} target='_blank' className={styles.icon}>
                <FaTwitter />
              </Link>
            </div>
            <div className={styles.join_us}>
              <button>
                <Image src={'/assets/svgs/account_circle.svg'} width={20} height={20} />
                <Link href={`${dataImages.items.hero_btn.text}`}>
                  {dataImages.items.hero_btn.name}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className={`${styles.sec_navbar} ${!isScrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.nav} ${isScrolled ? `navbar fixed-top ` : ''}`}>
          <div className={`container `}>
            <div className={`${styles.wraper}  `}>
              <Link href="/">
                <Image src={'/assets/svgs/logo.svg'} width={190} height={52} />
              </Link>
              <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.pages_links}>
                <ul>
                  <li className={activeLink === 'home' ? 'active' : ''}>
                    <a onClick={() => handleClick('/')}>
                      الرئيسية
                    </a>
                  </li>
                  <li className={activeLink === 'our_news' ? 'active' : ''}>
                    <a onClick={() => handleClick('#our_news')}>
                      أخبارنا وفعاليتنا
                    </a>
                  </li>
                  <li className={activeLink === 'trainings' ? 'active' : ''}>
                    <a onClick={() => handleClick('#trainings')}>
                      الدورات
                    </a>
                  </li>
                  <li className={activeLink === 'web' ? 'active' : ''}>
                    <a onClick={() => handleClick('#web')}>
                      المتجر الإلكتروني
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleClick('#')}>
                      المقرأه الالكترونية
                    </a>
                  </li>

                  <li
                    ref={containerLearnMenuRef}
                    className={`${styles.menu} ${router.pathname === '/learning' && styles.active}`} onClick={handleLearnMenuClick}>
                    <Link href={'/learning'}>
                      <p>
                        التعليم
                      </p>
                    </Link>
                    {/* <IoIosArrowDown /> */}
                    {/* {learnMenu &&
                      <motion.ul
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "tween" }}
                        className={`${styles.drop_down} ${learnMenu && styles.active}`}>
                        <li className={activeLink === 'learn' ? 'active' : ''}>
                          <a onClick={() => handleClick('/learn')}>
                            التعليم النسائي
                          </a>
                        </li>
                        <li className={activeLink === 'learn' ? 'active' : ''}>
                          <a onClick={() => handleClick('/learn')}>
                            تعليم الأطفال
                          </a>
                        </li>
                        <li className={activeLink === 'learn' ? 'active' : ''}>
                          <a onClick={() => handleClick('/learn')}>
                            الخطط الدراسية
                          </a>
                        </li>
                        <li className={activeLink === 'learn' ? 'active' : ''}>
                          <a onClick={() => handleClick('/learn')}>
                            نور البيان
                          </a>
                        </li>
                      </motion.ul>
                    } */}
                  </li>

                  <li>
                    <a onClick={() => handleClick('#')}>
                      عن المركز
                    </a>
                  </li>


                  {/* <li ref={containerAboutRef} className={`${styles.menu} ${about && styles.active}`} onClick={handleAboutClick}>
                    <a>
                      <p>
                        عن المركز
                      </p>
                    </a>
                    <IoIosArrowDown />
                    {about &&
                      <motion.ul

                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "tween" }}
                        className={`${styles.drop_down} `}>
                        <li className={activeLink === 'who_we_are' ? 'active' : ''}>
                          <a onClick={() => handleClick('/#who_we_are')}>
                            من نحن
                          </a>
                        </li>
                        <li className={activeLink === 'learn' ? 'active' : ''}>
                          <a onClick={() => handleClick('/learn')}>
                            رؤيتنا
                          </a>
                        </li>
                        <li className={activeLink === 'learn' ? 'active' : ''}>
                          <a onClick={() => handleClick('/learn')}>
                            رسالتنا
                          </a>
                        </li>
                      </motion.ul>
                    } 
                  </li> */}



                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div >
    </nav >
  );
};

export default Navbar;
