import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-900/20 to-transparent" />

    <div className="relative max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-8"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 mt-32">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-medium text-blue-200 text-nowrap">
          <div>BEST-SELLING AUTHOR</div>
          <div>EXECUTIVE PRODUCER</div>
          <div>TRANSFORMATIONAL SPEAKER</div>
          <div>FOUNDING EDUCATOR</div>
          <div>REAL-LIFE TRUTH TELLER</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
          BUILDING A LEGACY
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
          Over 30+ years in media, leadership, and personal growth,
          captivating & igniting audiences everywhere, from the conference
          room to the ballroom, stages to youth centers.
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
          "TO AWAKEN THE POWER, PURPOSE, AND POTENTIAL TO EVERYONE HE COMES IN
          CONTACT WITH."
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
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-gradient-to-r from-blue-600 to-yellow-600 text-white font-semibold px-8 py-4 rounded-full hover:from-blue-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
        >
          Discover More
        </button>
      </motion.div>
    </div>
  </section>
);

export default Hero;
