"use client";

import { motion } from "framer-motion";

const ProjectHero = () => (
  <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-900/20 to-transparent" />

    <div className="relative max-w-5xl mx-auto text-center mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-8"
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-blue-400 via-white to-yellow-400 bg-clip-text text-transparent">
            FILM, TELEVISION &amp; CAPITAL CONSULTING
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          Wali Waiters works with entrepreneurs, creators, producers, business
          owners, and emerging personalities to develop strong entertainment
          concepts and prepare qualified opportunities for the marketplace.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProjectHero;
