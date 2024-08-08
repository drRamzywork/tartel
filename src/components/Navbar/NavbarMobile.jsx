



import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMobile = ({ dataImages }) => {


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      className={styles.navbar_mobile}
    >
      <div className={styles.burger_icon}>
        <GiHamburgerMenu />
      </div>



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
