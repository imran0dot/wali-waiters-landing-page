"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectBooking from "../../../../sections/ProjectBooking";
import ProjectHero from "../../../../sections/ProjectHero";

const Project = () => (
  <>
    {/* Hero Section  */}
    <ProjectHero />

    <ProjectBooking />

    <motion.div
        // initial={{ opacity: 0, scale: 0.9 }}
        // animate={
        //   isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        // }
      transition={{ duration: 0.8, delay: 0.2 }}
      className="backdrop-blur-md bg-gradient-to-r from-blue-600/20 to-yellow-600/20 rounded-3xl border border-blue-400/30 p-12 max-w-4xl mx-auto mb-12"
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
        Overview
      </h3>
      <p className="text-lg text-gray-300 mb-8 leading-relaxed text-center">
        The 19th Hole with Jonathan is a reality-lifestyle TV series that
        takes viewers beyond the fairway — where championWhy It Matters:
      </p>
      <p className="text-lg text-gray-300 mb-8 leading-relaxed text-center">
        This series connects with an affluent, aspirational audience that
        loves golf, food, travel, and entertainment. By blendPartnership
        Opportunities:
      </p>
      <p className="text-lg text-gray-300 mb-8 leading-relaxed text-center">
        We’re finalizing a select group of sponsors and partners for Season
        One. To protect exclusivity, opportunities are limNext Steps:
      </p>
      <p className="text-lg text-gray-300 mb-8 leading-relaxed text-center">
        Want to explore how your brand can be featured?
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Link
          href="https://calendly.com/wali-waiters/30mincall?month=2025-04"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 to-yellow-600 text-white font-semibold px-8 py-4 rounded-full hover:from-blue-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a quick call
        </Link>
      </div>
    </motion.div>
  </>
);
export default Project;
