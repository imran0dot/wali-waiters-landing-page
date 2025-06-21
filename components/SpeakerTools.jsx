import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const topics = [
  {
    title: "TRANSFORMATIONAL TRUTHS™",
    subtitle: "10 BREAKTHROUGH PRINCIPLES TO CRUSH FEAR, DOUBT & DEFEAT",
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "LIFE BY DESIGN (YOUTH)",
    subtitle: "EMPOWERING TEENS TO CHOOSE WITH CONFIDENCE AND CLARITY",
    color: "from-green-500 to-blue-600",
  },
  {
    title: "BREAKDOWN TO BREAKTHROUGH",
    subtitle: "FAITH-FUELED MINDSET SHIFTS TO REBUILD YOUR LIFE",
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "POWER OF TEAM",
    subtitle: "BUILD WINNING CULTURES THROUGH TRUST, VISION, AND UNITY",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "VISION UNDER PRESSURE",
    subtitle: "LEAD WITH FOCUS WHEN EVERYTHING'S ON THE LINE",
    color: "from-red-500 to-yellow-600",
  },
  {
    title: "AUTHENTICITY WINS",
    subtitle: "HOW BEING REAL DRIVES TRUST AND LASTING IMPACT",
    color: "from-teal-500 to-blue-600",
  },
  {
    title: "THE POWER OF MEN",
    subtitle: "HELPING MEN RISE, LEAD, AND HEAL WITH STRENGTH AND PURPOSE",
    color: "from-indigo-500 to-purple-600",
  },
];

const SpeakerTools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="topics" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-900/20 to-transparent" />
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            Signature Speaking Topics
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateY: 0 }
                  : { opacity: 0, y: 50, rotateY: -30 }
              }
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="backdrop-blur-md bg-white/5 rounded-2xl border border-blue-500/20 p-6 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300 group cursor-pointer transform-gpu"
            >
              <div
                className={`w-full h-2 bg-gradient-to-r ${topic.color} rounded-full mb-6 group-hover:h-3 transition-all duration-300`}
              />

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                {topic.title}
              </h3>

              <p className="text-gray-400 text-sm font-medium leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {topic.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakerTools;
