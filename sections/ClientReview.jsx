'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const testimonials = [
  {
    quote:
      'Wali’s strategy helped me land paid speaking gigs and launch my coaching program!',
    client: 'Alex Morgan — Executive Coach & Speaker',
  },
  {
    quote: 'Thanks to Wali, I secured funding and major media opportunities!',
    client: 'Jordan Lee — Startup Founder',
  },
  {
    quote:
      'Wali’s mentorship completely changed my approach to business. I’m now scaling faster than ever.',
    client: 'Priya Das — Tech Entrepreneur',
  },
  {
    quote:
      'With Wali’s help, I built a personal brand that speaks for itself. Now I’m attracting high-ticket clients with ease.',
    client: 'Carlos Mendez — Branding Strategist',
  },
  {
    quote:
      'Wali didn’t just help me grow my audience — he helped me understand my value. That’s priceless.',
    client: 'Nina Park — Wellness Coach',
  },
];

const ClientReview = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <div className="mt-4 px-4 py-10 border border-white/20 rounded-xl bg-white/10 backdrop-blur-md flex items-center gap-2 text-white w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
          <TypingText title="| What Our Clients Say" textStyles="text-center" />
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              variants={fadeIn('up', 'tween', 0.2, 1)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
            >
              “{testimonials[current].quote}”
              <br />
              <span className="font-extrabold">
                {testimonials[current].client}
              </span>
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientReview;
