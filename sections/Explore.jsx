'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';

const Explore = () => (
  <section className={`${styles.yPaddings} sm:px-16 px-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10"
    >
      {/* IMAGE SECTION */}
      <motion.div
        variants={slideIn('left', 'tween', 0.3, 1)}
        className="relative flex-1"
      >
        <img
          src="/cover.png"
          alt="cover"
          className="w-full h-auto object-cover rounded-3xl relative z-10 shadow-2xl"
        />
      </motion.div>

      {/* TEXT SECTION */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <motion.h1
          variants={textVariant(1.1)}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
        >
          | Short <span className="text-indigo-400">Bio</span><br />
        </motion.h1>
        <motion.p
          variants={textVariant(1.3)}
          className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
        >
          I’ve produced award-winning content for major networks including Bravo, Discovery Channel, Lifetime, Travel Channel, and WeTV. I've collaborated with icons like Larry King and Lou Gossett Jr., and helped thousands of businesses tell their brand stories on national television. My mission? Helping entrepreneurs turn their ideas into influence, income, and scalable success.

        </motion.p>
      </motion.div>
    </motion.div>
  </section>
);

export default Explore;
