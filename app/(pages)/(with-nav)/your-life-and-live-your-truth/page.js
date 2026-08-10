/* eslint-disable react/button-has-type */

'use client';

import { motion } from 'framer-motion';
import { AMAZON_BOOK_URL } from '../../../../constants';
import styles from '../../../../styles';
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
} from '../../../../utils/motion';

const bookPhotos = [
  {
    src: '/book/wali-with-book.jpg',
    caption: 'Wali Waiters with Transformational Truths',
  },
  {
    src: '/book/reader-1.jpg',
    caption: 'Readers with their copy of Transformational Truths',
  },
  {
    src: '/book/reader-2.jpg',
    caption: 'Sharing the truths, one reader at a time',
  },
];

const Book = () => (
  <div className="relative mt-20">
    <section className={`${styles.yPaddings} sm:px-16 px-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16"
      >
        {/* BOOK COVER */}
        <motion.div
          variants={slideIn('left', 'tween', 0.3, 1)}
          className="relative flex-1 flex justify-center"
        >
          <img
            src="/book/book-cover.png"
            alt="Transformational Truths book cover by Wali Waiters"
            className="w-full max-w-md h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)] z-10"
          />
          <span className="absolute top-4 left-4 bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full shadow-md">
            Available Now
          </span>
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.9] flex flex-col justify-center text-center lg:text-left"
        >
          <motion.h1
            variants={textVariant(1.1)}
            className="text-4xl sm:text-5xl font-bold text-white leading-tight uppercase"
          >
            Transformational Truths is{' '}
            <span className="text-yellow-400">Available Now</span>
          </motion.h1>

          <motion.h2
            variants={textVariant(1.2)}
            className="text-lg text-gray-200 mt-6 font-semibold"
          >
            10 breakthrough principles to crush fear, doubt, and defeat while
            walking boldly in your purpose.
          </motion.h2>

          <motion.p
            variants={textVariant(1.3)}
            className="mt-8 text-gray-300 text-base"
          >
            What You’ll Receive:
          </motion.p>

          <motion.ul
            variants={textVariant(1.4)}
            className="mt-4 text-gray-200 space-y-3 list-disc list-inside"
          >
            <li>10 transformational principles to guide your growth</li>
            <li>
              Overcome fear, failure &amp; frustration with real-life insights
            </li>
            <li>
              Journaling prompts, power statements &amp; spiritual activations
            </li>
          </motion.ul>

          <motion.div
            variants={textVariant(1.5)}
            className="mt-10 flex justify-center lg:justify-start"
          >
            <a
              href={AMAZON_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-black text-lg font-bold px-8 py-4 rounded-full shadow-xl"
            >
              Buy Now on Amazon
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>

    {/* PHOTOGRAPHS */}
    <section className={`${styles.yPaddings} sm:px-16 px-6 relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          variants={textVariant(1.1)}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-white to-yellow-400 bg-clip-text text-transparent"
        >
          The Book in the Wild
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookPhotos.map((photo, index) => (
            <motion.div
              key={photo.src}
              variants={fadeIn('up', 'tween', 0.2 + index * 0.15, 1)}
              className="relative rounded-2xl overflow-hidden group shadow-lg border border-yellow-400/20"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
                <p className="text-base sm:text-lg font-semibold text-white mb-4 px-4 text-center">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

    {/* OFFICIAL AUTHOR BANNER */}
    <section className="sm:px-16 px-6 pb-16 relative z-10">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden border border-yellow-400/20 shadow-2xl">
        <img
          src="/book/author-banner.jpg"
          alt="Wali Waiters — author of Transformational Truths, executive producer, vision architect and media strategist"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex justify-center mt-10">
        <a
          href={AMAZON_BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-black text-lg font-bold px-8 py-4 rounded-full shadow-xl"
        >
          Buy Now on Amazon
        </a>
      </div>
    </section>

    <div className="gradient-03 z-0" />
  </div>
);

export default Book;
