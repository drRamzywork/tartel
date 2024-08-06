// import React, { useEffect, useState } from 'react';
// import styles from './index.module.scss';
// import Link from 'next/link';
// import { FaLinkedin } from "react-icons/fa";
// import { IoLogoInstagram } from "react-icons/io5";
// import { FaFacebook } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import Image from 'next/image';
// import { IoIosArrowDown } from "react-icons/io";

// const Navbar = () => {
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [hidden, setHidden] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Hide navbar when scrolling down, show when scrolling up
//       setHidden(currentScrollY > lastScrollY);
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);


//   return (
//     <>
//       <nav id='navbar' className={styles.navbar}>


//         <div className={styles.navbar_container}>
//           <div className={`${styles.social_media_links}  `} >

//             <div className="container">

//               <div className={styles.socail_nav}>

//                 <div className={styles.icons_container} >

//                   <Link href={'#'} target='_blanked' className={styles.icon}>
//                     <FaLinkedin />
//                   </Link>

//                   <Link href={'#'} target='_blanked' className={styles.icon}>
//                     <IoLogoInstagram />
//                   </Link>

//                   <Link href={'#'} target='_blanked' className={styles.icon}>
//                     <FaFacebook />
//                   </Link>

//                   <Link href={'#'} target='_blanked' className={styles.icon}>
//                     <FaXTwitter />
//                   </Link>



//                 </div>

//                 <div className={styles.join_us}>
//                   <button>
//                     <Image src={'/assets/svgs/account_circle.svg'} width={20} height={20} />
//                     <Link href={'#'}>
//                       انضم الى عائلتنا
//                     </Link>


//                   </button>
//                 </div>

//               </div>

//             </div>


//           </div>

//           <div className="container">


//             <div className={styles.sec_navbar}>
//               <Link href="/">
//                 <Image src={'/assets/svgs/logo.svg'} width={190} height={52} />
//               </Link>
//               <div className={styles.pages_links}>
//                 <ul>
//                   <li>
//                     <Link href={'/'}>
//                       الرئيسية
//                     </Link>

//                   </li>

//                   <li>
//                     <Link href={'#our_news'}>
//                       أخبارنا وفعاليتنا
//                     </Link>
//                   </li>

//                   <li>
//                     <Link href={'#trainings'}>
//                       الدورات
//                     </Link>
//                   </li>

//                   <li>
//                     <Link href={'/electronic-reading'}>
//                       المتجر الإلكتروني
//                     </Link>

//                   </li>

//                   <li>
//                     <Link href={'#'}>
//                       المقرأه الالكترونية
//                     </Link>
//                   </li>

//                   <li className={styles.menu}>
//                     <a >
//                       <p>
//                         التعليم
//                       </p>
//                     </a>

//                     <IoIosArrowDown />
//                     <ul className={styles.drop_down}>

//                       <li>
//                         <Link href={'/learn'}>
//                           التعليم النسائي
//                         </Link>
//                       </li>

//                       <li>
//                         <Link href={'/learn'}>
//                           تعليم الأطفال
//                         </Link>

//                       </li>

//                       <li>
//                         <Link href={'/learn'}>
//                           الخطط الدراسية
//                         </Link>


//                       </li>
//                       <li>
//                         <Link href={'/learn'}>
//                           نور البيان
//                         </Link>
//                       </li>
//                     </ul>

//                   </li>


//                   <li className={styles.menu}>
//                     <a >
//                       <p>
//                         عن المركز
//                       </p>
//                     </a>
//                     <IoIosArrowDown />
//                     <ul className={styles.drop_down}>

//                       <li>
//                         <Link href={'/learn'}>

//                         </Link>

//                       </li>

//                       <li>
//                         <Link href={'/learn'}>
//                           تعليم الأطفال
//                         </Link>

//                       </li>
//                       <li>
//                         <Link href={'/learn'}>
//                           الخطط الدراسية
//                         </Link>


//                       </li>
//                       <li>
//                         <Link href={'/learn'}>
//                           نور البيان
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

//                 </ul>
//               </div>

//             </div>

//           </div>

//         </div>

//       </nav>
//     </>
//   )
// }

// export default Navbar



// import React, { useEffect, useState } from 'react';
// import styles from './index.module.scss';
// import Link from 'next/link';
// import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
// import { IoLogoInstagram } from "react-icons/io5";
// import Image from 'next/image';
// import { IoIosArrowDown } from "react-icons/io";
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav id='navbar' className={styles.navbar}>
//       <motion.div
//         initial={{ opacity: 0, }}
//         whileInView={{ opacity: 1, }}
//         exit={{ opacity: 0 }} className={`${styles.social_media_links} ${isScrolled ? styles.scrolled : ''}`}>
//         <div className="container">
//           <div className={styles.social_nav}>
//             <div className={styles.icons_container}>
//               <Link href={'#'} target='_blank' className={styles.icon}>
//                 <FaLinkedin />
//               </Link>
//               <Link href={'#'} target='_blank' className={styles.icon}>
//                 <IoLogoInstagram />
//               </Link>
//               <Link href={'#'} target='_blank' className={styles.icon}>
//                 <FaFacebook />
//               </Link>
//               <Link href={'#'} target='_blank' className={styles.icon}>
//                 <FaTwitter />
//               </Link>
//             </div>
//             <div className={styles.join_us}>
//               <button>
//                 <Image src={'/assets/svgs/account_circle.svg'} width={20} height={20} />
//                 <Link href={'#'}>
//                   انضم الى عائلتنا
//                 </Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       <div className={`${styles.sec_navbar}  ${!isScrolled ? styles.scrolled : ''} `}>
//         <div className={`${styles.nav} ${isScrolled ? `navbar fixed-top ` : ''}`}>
//           <div className={`container `}>
//             <div className={`${styles.wraper}  `}>
//               <Link href="/">
//                 <Image src={'/assets/svgs/logo.svg'} width={190} height={52} />
//               </Link>
//               <motion.div initial={{ opacity: 0, }}
//                 whileInView={{ opacity: 1, }}
//                 exit={{ opacity: 0 }} className={styles.pages_links}>
//                 <ul>
//                   <li>
//                     <Link href={'/'}>
//                       الرئيسية
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href={'#our_news'}>
//                       أخبارنا وفعاليتنا
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href={'#trainings'}>
//                       الدورات
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href={'/electronic-reading'}>
//                       المتجر الإلكتروني
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href={'#'}>
//                       المقرأه الالكترونية
//                     </Link>
//                   </li>
//                   <li className={styles.menu}>
//                     <a>
//                       <p>
//                         التعليم
//                       </p>
//                     </a>
//                     <IoIosArrowDown />
//                     <ul className={styles.drop_down}>
//                       <li>
//                         <Link href={'/learn'}>
//                           التعليم النسائي
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href={'/learn'}>
//                           تعليم الأطفال
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href={'/learn'}>
//                           الخطط الدراسية
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href={'/learn'}>
//                           نور البيان
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className={styles.menu}>
//                     <a>
//                       <p>
//                         عن المركز
//                       </p>
//                     </a>
//                     <IoIosArrowDown />
//                     <ul className={styles.drop_down}>
//                       <li>
//                         <Link href={'/learn'}>
//                           تعليم الأطفال
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href={'/learn'}>
//                           الخطط الدراسية
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href={'/learn'}>
//                           نور البيان
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </motion.div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </nav >
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from 'react';
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
  const router = useRouter();

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

  return (
    <nav id='navbar' className={styles.navbar}>
      <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, }}
        exit={{ opacity: 0 }} className={`${styles.social_media_links} ${isScrolled ? styles.scrolled : ''}`}>
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

      <div className={`${styles.sec_navbar}  ${!isScrolled ? styles.scrolled : ''} `}>
        <div className={`${styles.nav} ${isScrolled ? `navbar fixed-top ` : ''}`}>
          <div className={`container `}>
            <div className={`${styles.wraper}  `}>
              <Link href="/">
                <Image src={'/assets/svgs/logo.svg'} width={190} height={52} />
              </Link>
              <motion.div initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, }}
                exit={{ opacity: 0 }} className={styles.pages_links}>
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
                  <li className={activeLink === 'electronic-reading' ? 'active' : ''}>
                    <a onClick={() => handleClick('/electronic-reading')}>
                      المتجر الإلكتروني
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleClick('#')}>
                      المقرأه الالكترونية
                    </a>
                  </li>
                  <li className={styles.menu}>
                    <a>
                      <p>
                        التعليم
                      </p>
                    </a>
                    <IoIosArrowDown />
                    <ul className={styles.drop_down}>
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
                    </ul>
                  </li>
                  <li className={styles.menu}>
                    <a>
                      <p>
                        عن المركز
                      </p>
                    </a>
                    <IoIosArrowDown />
                    <ul className={styles.drop_down}>
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
                    </ul>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>


    </nav >
  );
}

export default Navbar;