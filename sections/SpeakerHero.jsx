import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-900/20 to-transparent" />

    <div className="relative max-w-7xl mx-auto text-center">
      {/* SPEAKING_PHOTO_HERO — Wali speaking onstage (main hero image).
          To swap, change the src below. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mx-auto mb-10 flex justify-center"
      >
        <Image
          src="/speaking/wali-speaking-1.jpg"
          alt="Wali Waiters speaking onstage at a conference"
          width={1600}
          height={1200}
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="w-auto h-auto max-h-[28rem] sm:max-h-[32rem] max-w-full rounded-3xl"
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
            WALI WAITERS
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="backdrop-blur-sm bg-white/5 rounded-2xl border border-blue-500/20 p-8 mb-12 max-w-4xl mx-auto"
      >
        {/* Flex-wrap keeps the credentials centred on every breakpoint. */}
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-sm sm:text-base font-medium text-blue-200">
          <span className="whitespace-nowrap">Best-Selling Author</span>
          <span className="text-blue-400/60">|</span>
          <span className="whitespace-nowrap">Executive Producer</span>
          <span className="text-blue-400/60">|</span>
          <span className="whitespace-nowrap">Transformational Speaker</span>
          <span className="text-blue-400/60">|</span>
          <span className="whitespace-nowrap">Education Advocate</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-yellow-400 uppercase tracking-wide">
          Now Booking for Conferences, Corporate Events, Schools, Faith-Based
          Organizations, Retreats, and Special Events
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          With over 30 years of experience in media, education,
          entrepreneurship, leadership, and personal transformation, Wali
          Waiters brings a powerful combination of real-life experience,
          transformational principles, faith, humor, and unforgettable
          storytelling to every audience.
        </p>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
          Wali&rsquo;s message inspires people to move beyond fear, doubt,
          disappointment, and defeat so they can recognize their purpose,
          activate their potential, and create meaningful change in their lives.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="backdrop-blur-md bg-gradient-to-r from-blue-600/20 to-yellow-600/20 rounded-2xl border border-blue-400/30 p-8 max-w-4xl mx-auto"
      >
        <h3 className="text-xl font-semibold text-yellow-400 mb-4">
          HIS ONE AND ONLY MISSION...
        </h3>
        <p className="text-2xl sm:text-3xl font-bold text-white leading-tight">
          &ldquo;TO AWAKEN THE POWER, PURPOSE, AND POTENTIAL TO EVERYONE HE
          COMES IN CONTACT WITH.&rdquo;
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.0 }}
        className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
      >
        <Link
          href="/booking"
          className="bg-gradient-to-r from-blue-600 to-yellow-600 text-white font-semibold px-8 py-4 rounded-full hover:from-blue-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
        >
          Book Wali For Your Event
        </Link>

        <a
          href="/WALI_WAITERS_one_sheet.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-blue-400/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
        >
          Speaker One Sheet
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
