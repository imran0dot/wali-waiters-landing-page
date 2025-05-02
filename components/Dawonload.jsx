// ...imports remain unchanged

'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Download = () => (
  <motion.div
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative z-50`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      {/* 📘 New Download Section */}
      <div className="bg-[#1a1a1a49] rounded-2xl p-6 lg:p-8 text-white text-center space-y-4 shadow-md">
        <h5 className="text-2xl md:text-3xl font-bold">
          Download my exclusive guide:
        </h5>
        <p className="text-lg md:text-xl font-semibold italic">
          “5 Strategies to Monetize Your Brand & Influence”
        </p>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          📘 Your step-by-step blueprint to transform your expertise into profit
          and visibility.
        </p>

        <div className="flex flex-col items-centers gap-3 justify-center">
          <img src="/free_gide.png" className="w-60 mx-auto" draggable={false} />

          {/* <a
            href="/download-free-gide"
            target="_blank"
            className="inline-block mt-2 px-6 py-3 bg-[#25618B] text-white rounded-full hover:bg-[#1d4e6b] transition cursor-pointer z-50"
          >
            👉 Download the Free Guide
          </a> */}
        </div>
      </div>

      {/* <div className="footer-gradient z-0" /> */}
    </div>
  </motion.div>
);

export default Download;
