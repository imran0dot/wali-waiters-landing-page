/* eslint-disable react/button-has-type */

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Optional: Icons
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
  {
    quote:
      'My life has not been the same since the day I met Wali Waiters! He took my vision and turned it into a multimillion dollar production!',
    client: 'Johnny Regan — Founder, The Global Vision Conference',
  },
];

const ClientReview = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000); // 7-second auto-rotation
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <div className="mt-4 px-4 py-10 border border-white/20 rounded-xl bg-white/10 backdrop-blur-md text-white w-full">
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
              className="mt-6 font-normal sm:text-[28px] text-[18px] text-center text-secondary-white"
            >
              “{testimonials[current].quote}”
              <br />
              <span className="font-extrabold block mt-4 text-white">
                {testimonials[current].client}
              </span>
            </motion.p>
          </AnimatePresence>

          <div className="mt-8 flex gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/20 transition duration-300"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/20 transition duration-300"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientReview;
