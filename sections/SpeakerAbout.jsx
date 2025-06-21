import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SpeakerAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-900/20 to-transparent" />
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            The Impact
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="backdrop-blur-md bg-white/5 rounded-3xl border border-blue-500/20 p-8 sm:p-12 mb-12"
        >
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            Wali is known for his genuine burning desire & passion, humility,
            soul-stirring, captivating storytelling, delivering a positive
            impact to all. Whether speaking to doctors, CEOs, and teens alike,
            his message resonates to the masses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="backdrop-blur-md bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl border border-blue-400/30 p-8"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">
              AUDIENCES + FORMATS
            </h3>
            <ul className="space-y-3 text-gray-300">
              {[
                "CONFERENCES & CORPORATE KEYNOTES",
                "SEMINARS & BREAKOUT WORKSHOPS",
                "SCHOOL ASSEMBLIES & TEEN SESSIONS",
                "LEADERSHIP & BUSINESS RETREATS",
                "FUNDRAISERS, NONPROFITS & FAITH-BASED EVENTS",
                "PANEL MODERATION & MEDIA TRAININGS",
                "MEN'S GROUPS & PERSONAL DEVELOPMENT CIRCLES",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="backdrop-blur-md bg-gradient-to-bl from-yellow-600/20 to-transparent rounded-2xl border border-yellow-400/30 p-8"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              NOW BOOKING
            </h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-4">
                2025-2026
              </div>
              <div className="text-xl font-semibold text-white mb-6">
                TRANSFORMATIVE TOUR
              </div>
              <motion.a
                href="https://waliwaitersconsulting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-yellow-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:from-yellow-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WALIWAITERSCONSULTING.COM
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerAbout;
