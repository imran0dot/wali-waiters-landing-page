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
    </section>
  );
};

export default ProjectBooking;
