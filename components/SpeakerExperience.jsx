import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  "GLOBAL VISION CONFERENCE | KEYNOTE SPEAKER",
  "BOYS & GIRLS CLUB OF BROWARD COUNTY | ROLE MODELS & INSPIRE EVENT",
  "TOP DOCS CONFERENCE | GUEST SPEAKER",
  "OAKSTONE ACADEMY OF THE PALM BEACHES | FOUNDING MEMBER & CHAIRMAN",
  "EDUCATIONAL FUNDRAISER SPEAKER & YOUTH ADVOCATE",
  "SEMINARS, MEN'S RETREATS, AND BREAKOUT SESSIONS NATIONWIDE",
  "FEATURED ON MULTIPLE PODCASTS DEDICATED TO TRANSFORMATION, MINDSET, LEADERSHIP & LEGACY",
  "EXECUTIVE PRODUCER OF REALITY TV SHOWS AND MEDIA CONSULTANT",
];

const SpeakerExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-900/20 to-transparent" />
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
            Speaking & Media Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-md bg-white/5 rounded-2xl border border-blue-500/20 p-6 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300 group"
            >
              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full flex-shrink-0 mt-2 group-hover:scale-125 transition-transform duration-300" />
                <p className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                  {experience}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakerExperience;
