/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */

'use client';

import { motion } from 'framer-motion';
import styles from '../../../../styles';
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
} from '../../../../utils/motion';

const Book = () => {
  const handleOnClick = () => {
    window.location.href = 'https://buy.stripe.com/dRmcN4fVo4Zxbti2Qg8N200';
  };
  return (
    <div className="relative">
      <section className={`${styles.yPaddings} sm:px-16 px-6`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16"
        >
          {/* IMAGE SECTION */}
          <motion.div
            variants={slideIn('left', 'tween', 0.3, 1)}
            className="relative flex-1"
          >
            <img
              src="/book_cover.jpeg"
              alt="Transformational Truths book cover by Wali Waiters"
              className="w-full h-auto object-cover rounded-3xl shadow-2xl z-10"
              loading="lazy"
            />
            <span className="absolute top-4 left-4 bg-indigo-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
              New Release
            </span>
          </motion.div>

          {/* TEXT SECTION */}
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] flex flex-col justify-center text-center lg:text-left"
          >
            <motion.h1
              variants={textVariant(1.1)}
              className="text-4xl sm:text-5xl font-bold text-white leading-tight"
            >
              Ready to Reset{' '}
              <span className="text-indigo-400">
                Your Life and Live Your Truth?
              </span>
            </motion.h1>

            <motion.h2
              variants={textVariant(1.2)}
              className="text-lg text-gray-200 mt-6 font-semibold"
            >
              <span className="text-indigo-400">$24.95</span> – Pre-order{' '}
              <strong className="text-white">Transformational Truths</strong> by
              Wali Waiters — your soul-shifting guide to rise, realign & walk in
              purpose.
            </motion.h2>

            <motion.p
              variants={textVariant(1.3)}
              className="mt-6 text-gray-300 text-base"
            >
              What You’ll Receive:
            </motion.p>

            <motion.ul
              variants={textVariant(1.4)}
              className="mt-4 text-gray-200 space-y-3 list-disc list-inside"
            >
              <li>10 transformational principles to guide your growth</li>
              <li>
                Overcome fear, failure & frustration with real-life insights
              </li>
              <li>
                Journaling prompts, power statements & spiritual activations
              </li>
              <li>
                <strong className="text-indigo-300">FREE</strong> 20-minute
                Clarity Call with Wali Waiters (first 25 buyers)
              </li>
            </motion.ul>

            <motion.div
              variants={textVariant(1.5)}
              className="mt-8 flex justify-center lg:justify-start"
            >
              <button
                onClick={handleOnClick}
                className="bg-indigo-500 hover:bg-indigo-600 transition-colors text-white text-lg font-semibold px-8 py-3 rounded-full shadow-xl"
              >
                Pre-order Now
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <div className="gradient-03 z-0" />
    </div>
  );
};

export default Book;
