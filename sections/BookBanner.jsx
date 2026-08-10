'use client';

import { motion } from 'framer-motion';
import { AMAZON_BOOK_URL } from '../constants';
import styles from '../styles';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';

const BookBanner = () => (
  <section
    id="transformational-truths"
    className={`${styles.yPaddings} sm:px-16 px-6 relative z-10`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="max-w-7xl mx-auto rounded-3xl border border-yellow-400/30 bg-gradient-to-br from-[#100d06] via-black to-[#1a1408] shadow-2xl overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center gap-10 p-8 sm:p-12">
        {/* BOOK COVER + AUTHOR PHOTO */}
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 w-full flex justify-center items-end gap-4"
        >
          <img
            src="/book/book-cover.png"
            alt="Transformational Truths by Wali Waiters — official book cover"
            className="w-[55%] max-w-[280px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
          />
          <img
            src="/book/wali-with-book.jpg"
            alt="Wali Waiters holding his book Transformational Truths"
            className="w-[45%] max-w-[240px] h-auto object-cover rounded-2xl border border-yellow-400/20 shadow-2xl"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[1.1] text-center lg:text-left"
        >
          <motion.span
            variants={textVariant(1.0)}
            className="inline-block text-xs sm:text-sm font-bold tracking-[0.2em] text-black bg-yellow-400 px-4 py-1.5 rounded-full"
          >
            AVAILABLE NOW
          </motion.span>

          <motion.h2
            variants={textVariant(1.1)}
            className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white uppercase"
          >
            Transformational Truths is{' '}
            <span className="text-yellow-400">Available Now</span>
          </motion.h2>

          <motion.p
            variants={textVariant(1.2)}
            className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
          >
            10 breakthrough principles to crush fear, doubt, and defeat while
            walking boldly in your purpose.
          </motion.p>

          <motion.div
            variants={textVariant(1.3)}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <a
              href={AMAZON_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-black text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Buy Now on Amazon
            </a>
            <a
              href="/your-life-and-live-your-truth"
              className="text-gray-300 hover:text-yellow-400 font-semibold underline underline-offset-4 transition-colors duration-300"
            >
              Learn more about the book
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default BookBanner;
