'use client';

import { motion } from 'framer-motion';
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
            With over three decades of experience in TV production, business
            strategy, and media coaching, I’ve helped countless entrepreneurs
            launch shows, secure funding, master marketing, and scale their
            vision. Now it’s time to bring your ideas to life.
          </motion.p>
        </div>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <span className="font-normal text-[16px] text-white">Schedule Your Free Strategy Call Now!</span>
        </button>
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
              <a key={social.name} href={social.link}>
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
