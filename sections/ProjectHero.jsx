"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import picableImage from "../public/Pickleball-Adventures.png";

const ProjectHero = () => (
  <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-900/20 to-transparent" />

    <div className="relative max-w-7xl mx-auto text-center mt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className=" p-8 w-2/6 mx-auto"
      >
        <Image
          src={picableImage}
          width={200}
          height={200}
          alt="pickleball"
          className="mx-auto"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-8"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6">
          <span className="block bg-gradient-to-r from-blue-400 via-white to-yellow-400 bg-clip-text text-transparent">
            Pickleball Adventures
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
          Discover Our Premiere Productions and New Projects Transforming
          Entertainment At Wali Waiters Consulting, we’re producing dynamic,
          purpose-driven shows that blend storytelling, lifestyle, and impact.
          From the high-energy world of Pickleball Adventures to the
          sophisticated vibe of{" "}
          <span className="font-bold bg-gradient-to-r from-blue-400 via-white to-yellow-400 bg-clip-text text-transparent">
            The 19th Hole
          </span>{" "}
          , each project represents innovation in entertainment.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.0 }}
        className="mt-12"
      >
        <button
          type="button"
          className="bg-gradient-to-r from-blue-600 to-yellow-600 text-white font-semibold px-8 py-4 rounded-full hover:from-blue-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
        >
          <a
            href="https://pickleballadventurestv.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More About Pickleball Adventures
          </a>
        </button>
      </motion.div>
    </div>
  </section>
);

export default ProjectHero;
