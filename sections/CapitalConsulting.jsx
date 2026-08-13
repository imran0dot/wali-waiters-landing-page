'use client';

import { motion } from 'framer-motion';
import { CALENDLY_URL } from '../constants';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const CapitalConsulting = () => (
  <section
    id="capital-consulting"
    className={`${styles.yPaddings} sm:px-16 px-6 relative z-10`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="max-w-4xl mx-auto text-center backdrop-blur-md bg-white/5 rounded-3xl border border-blue-500/20 p-8 sm:p-12"
    >
      <motion.h2
        variants={textVariant(1.1)}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent"
      >
        Capital Consulting
      </motion.h2>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-8 text-xl sm:text-2xl font-semibold text-white"
      >
        Do you have an investor-ready film, television project, or business
        seeking capital, sponsorship, or strategic partners?
      </motion.p>

      <motion.p
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="mt-6 text-lg text-gray-300 leading-relaxed"
      >
        Wali Waiters Consulting works with qualified opportunities that have a
        professional pitch deck, a clear funding request, financial projections,
        an experienced team, and organized supporting materials.
      </motion.p>

      <motion.p
        variants={fadeIn('up', 'tween', 0.4, 1)}
        className="mt-4 text-base text-gray-400 leading-relaxed"
      >
        Projects that have strong potential but require additional preparation
        may qualify for a separate paid Capital-Readiness Engagement.
      </motion.p>

      <motion.div variants={fadeIn('up', 'tween', 0.5, 1)} className="mt-10">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-600 to-yellow-600 text-white font-semibold px-8 py-4 rounded-full hover:from-blue-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
        >
          Schedule a Capital Strategy Consultation
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default CapitalConsulting;
