'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';
import styles from '../styles';
import { TitleText } from '../components';
import {
  planetVariants,
  staggerContainer,
  fadeIn,
  textVariant,
  textVariant2,
} from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col items-start"
      >
        <TitleText title={<>Are You Looking to Create a TV Show?</>} />
        <motion.p
          variants={textVariant(1.3)}
          className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
        >
          Whether you’ve got an idea for a reality show, docuseries, or talk
          show, I’ll help you shape your concept, secure funding, and connect
          with the right people to bring your vision to life. Let’s make your
          show pitch-ready and marketable to networks and streaming platforms.
        </motion.p>

        <motion.h2
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="font-bold md:text-[24px] text-[20px] text-white  mt-5"
        >
          Let’s Build Your Custom Roadmap to Success
        </motion.h2>

        <motion.p
          variants={textVariant(1.8)}
          className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
        >
          I’ve helped clients secure funding, grow influence, and land
          game-changing media opportunities. Now, it's your turn.
        </motion.p>

        <motion.h2
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="font-bold md:text-[24px] text-[20px] text-white  mt-5"
        >
          Book Your FREE 30-Minute Strategy Call
        </motion.h2>
        <Link
          href="https://calendly.com/wali-waiters/30mincall?month=2025-04"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] mt-5"
        >
          <span className="font-normal text-[16px] text-white">
            Schedule Your Free Strategy Call Now!
          </span>
        </Link>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/smaile.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain rounded-2xl"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
