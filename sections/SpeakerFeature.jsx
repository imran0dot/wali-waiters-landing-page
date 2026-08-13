'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const SpeakerFeature = () => (
  <section
    className={`${styles.yPaddings} sm:px-16 px-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/20 via-blue-900/10 to-transparent relative`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10"
    >
      {/* TEXT SECTION */}
      <div className="z-10 flex-1 text-center lg:text-left">
        <motion.h2
          variants={textVariant(1.1)}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
        >
          Bring Wali to Your <span className="text-yellow-400">Stage</span>
        </motion.h2>

        <motion.p
          variants={textVariant(1.3)}
          className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
        >
          Now booking keynotes and workshops for conferences, corporate events,
          schools, faith-based organizations, and retreats.
        </motion.p>

        <motion.div
          variants={textVariant(1.5)}
          className="mt-8 flex justify-center lg:justify-start"
        >
          <Link href="/speaker">
            <button
              type="button"
              className="bg-gradient-to-r from-blue-600 to-yellow-600 text-white font-semibold px-8 py-4 rounded-full hover:from-blue-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Book Wali To Speak
            </button>
          </Link>
        </motion.div>
      </div>

      {/* IMAGE SECTION — links to the Speaker page */}
      <motion.div
        variants={slideIn('right', 'tween', 0.3, 1)}
        className="relative flex-1 w-full"
      >
        <Link
          href="/speaker"
          aria-label="Visit the Speaker page"
          className="block"
        >
          {/* SPEAKING_PHOTO_HOME — links to the Speaker page. To swap, change src below. */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/speaking/wali-speaking-2.jpg"
              alt="Wali Waiters speaking onstage — book Wali to speak"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain rounded-3xl shadow-2xl"
            />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default SpeakerFeature;
