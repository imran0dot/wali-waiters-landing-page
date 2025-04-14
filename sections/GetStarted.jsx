'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants, textVariant2 } from '../utils/motion';
import { StartSteps, TypingText } from '../components';

import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`${styles.flexCenter} flex-1`}
      >
        <img src="/getstart.PNG" alt="Get-Started" className="w-[90%] h-[90%] object-content rounded-3xl" />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Empowering Visionaries to Monetize, Grow, and Lead with Impact " />
        <motion.h2
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="mt-[8px] font-bold md:text-[24px] text-[20px] text-white"
        >I help entrepreneurs, business owners, speakers, and thought leaders like you:
        </motion.h2>
        <div className="mt-[31px] flex flex-col max-w-[470px] gap-[24px]">
          {startingFeatures.map((features, index) => (
            <StartSteps
              key={features}
              number={index + 1}
              text={features}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
