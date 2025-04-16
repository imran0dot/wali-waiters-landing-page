'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:px-16 px-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10"
    >
      {/* TEXT SECTION */}
      <div className="z-10 flex-1 text-center lg:text-left">
        <motion.h1
          variants={textVariant(1.1)}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
        >
          Turn Your <span className="text-indigo-400">Influence</span>
          <br />
          Into <span className="text-indigo-400">Income</span> & Business Growth
        </motion.h1>

        <motion.p
          variants={textVariant(1.3)}
          className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
        >
          Ready to Monetize Your Brand, Scale Your Business & Secure High-Paying
          Opportunities?
        </motion.p>

        <motion.div
          variants={textVariant(1.5)}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <Link href="https://calendly.com/wali-waiters/30mincall?month=2025-04">
            <div className="bg-indigo-500 text-white px-6 py-3 rounded-2xl font-medium hover:bg-indigo-600 transition">
              Booking Now
            </div>
          </Link>
        </motion.div>
      </div>

      {/* IMAGE SECTION */}
      <motion.div
        variants={slideIn('right', 'tween', 0.3, 1)}
        className="relative flex-1"
      >
        <img
          src="/top-section.png"
          alt="cover"
          className="w-full h-auto object-cover rounded-3xl relative z-10 shadow-2xl"
        />
        <motion.img
          src="/stamp.png"
          alt="stamp"
          className="absolute bottom-[-40px] right-[-20px] sm:w-[120px] w-[80px] animate-spin-slow z-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
