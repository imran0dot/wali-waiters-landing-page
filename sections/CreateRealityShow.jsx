'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { CALENDLY_URL } from '../constants';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const services = [
  'Concept development',
  'Show format and structure',
  'Logline and series overview',
  'Cast and character development',
  'Treatment and pitch-deck guidance',
  'Production and budget planning',
  'Sponsorship and brand-integration strategy',
  'Preparation for network, streaming, and distribution conversations',
];

const CreateRealityShow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="create-your-own-reality-show"
      className={`${styles.yPaddings} sm:px-16 px-6 relative z-10`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        ref={ref}
        className="max-w-5xl mx-auto backdrop-blur-md bg-white/5 rounded-3xl border border-blue-500/20 p-8 sm:p-12"
      >
        <motion.h2
          variants={textVariant(1.1)}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent text-center"
        >
          Create Your Own Reality Show
        </motion.h2>

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-8 text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto"
        >
          Do you have an idea, story, business, personality, or lifestyle that
          could become a compelling reality show, docuseries, talk show, or
          unscripted television concept? Wali helps qualified clients develop
          their original ideas into professionally positioned entertainment
          opportunities.
        </motion.p>

        <motion.ul
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl mx-auto"
        >
          {services.map((service) => (
            <motion.li
              key={service}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
              <span className="font-medium text-gray-200">{service}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={fadeIn('up', 'tween', 0.5, 1)}
          className="mt-12 text-center"
        >
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-yellow-600 text-white font-semibold px-8 py-4 rounded-full hover:from-blue-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            Schedule a Television Development Consultation
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CreateRealityShow;
