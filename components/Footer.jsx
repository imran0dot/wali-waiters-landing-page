'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants, textVariant } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div>
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Why Work With Me?
          </h4>
          <motion.p
            variants={textVariant(1.3)}
            className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
          >
            As a seasoned <strong>business consultant, executive producer, and author,</strong> I’ve helped countless small business owners, creators, and changemakers raise capital, scale their operations, and bring bold ideas to life—from consulting businesses to film and television projects.
          </motion.p>
        </div>
        <Link href="https://calendly.com/wali-waiters/30mincall?month=2025-04"
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <span className="font-normal text-[16px] text-white">Schedule Your Free Strategy Call Now!</span>
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* <h4 className="font-extrabold text-[24px] text-white">METADROID</h4> */}
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © {new Date().getFullYear()} Wali Waiters. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <Link target="_blank" key={social.name} href={social.link}>
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
