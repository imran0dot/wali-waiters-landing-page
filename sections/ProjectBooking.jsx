"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const ProjectBooking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-900/20 to-transparent" />
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="backdrop-blur-md bg-white/5 rounded-3xl border border-blue-500/20 p-8 sm:p-12 mb-12 flex flex-col justify-center items-center gap-5"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-blue-400 via-white to-yellow-400 bg-clip-text text-transparent">
              The 19th Hole
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            The 19th Hole is a fresh, golf-inspired series that dives into the
            stories, connections, and cluture behind the game. It's about what
            the courese - around it
          </p>

          <Link
            href="/booking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:from-yellow-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore The 19th Hole
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="backdrop-blur-md bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl border border-blue-400/30 p-8"
        >
          <h3 className="text-2xl font-bold text-yellow-400 mb-6">
            The 19th Hole with Jonathan
          </h3>
          <ul className="space-y-3 text-gray-300">
            {[
              "Celebrity golf + lifestyle TV series where the game continues after the round.",
              "A-list guests, championship courses, luxury dining, and brand integrations.",
              "Badges: 15 Streaming Platforms · 436M+ Households · Celebrity Guests",
              "Viewership: 436M+ households + 10M+ social reach",
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

          <div className="flex flex-col gap-5">
            <i className="text-white mt-7">
              "Distributed across 15 major streaming platforms, reaching over
              436M+ households and 10M+ social impressions"
            </i>

            <div className="mt-3 flex justify-center items-center">
              <Link
                href="https://calendly.com/wali-waiters/30mincall?month=2025-04"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-yellow-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:from-yellow-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Booking Now
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="backdrop-blur-md bg-gradient-to-bl from-yellow-600/20 to-transparent rounded-2xl border border-yellow-400/30 p-8"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-6">
            Pickleball Adventures TV
          </h3>
          <ul className="space-y-3 text-gray-300">
            {[
              "Fast-growing sport meets travel and lifestyle, highlighting destinations, competition, and culture.",
              "Badges: Lifestyle · Travel · Emerging Sport",
              "Viewership: 436M+ households + 10M+ social reach",
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

          <div className="flex flex-col gap-5">
            <i className="text-white mt-7">
              "Distributed across 15 major streaming platforms, reaching over
              436M+ households and 10M+ social impressions"
            </i>

            <div className="mt-3 flex justify-center items-center">
              <Link
                href="https://calendly.com/wali-waiters/30mincall?month=2025-04"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-yellow-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:from-yellow-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Booking Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectBooking;
