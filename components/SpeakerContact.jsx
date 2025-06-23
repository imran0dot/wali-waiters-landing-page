import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const SpeakerContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-900/20 to-transparent" />
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
            Book Wali Today
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="backdrop-blur-md bg-gradient-to-r from-blue-600/20 to-yellow-600/20 rounded-3xl border border-blue-400/30 p-12 max-w-4xl mx-auto mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Ready to Transform Your Event?
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Whether you're planning a corporate keynote, youth assembly, or
              transformational retreat, Wali brings decades of experience and
              passion to ignite your audience.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-yellow-600 text-white font-semibold px-8 py-4 rounded-full hover:from-blue-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Booking Now
              </Link>

              <motion.div
                className="text-center sm:text-left"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-yellow-400 font-semibold text-lg">
                  Now Booking
                </div>
                <div className="text-white font-bold text-xl">
                  2025-2026 Tour
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakerContact;
