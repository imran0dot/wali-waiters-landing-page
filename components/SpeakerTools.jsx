import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Target, Heart, Crown } from "lucide-react";

// Transformational Truths is FIRST and the most prominent topic.
const topics = [
  {
    n: "01",
    Icon: Sparkles,
    title: "TRANSFORMATIONAL TRUTHS™",
    subtitle:
      "Ten breakthrough principles to help people crush fear, doubt, and defeat while walking boldly in their purpose.",
    tag: "Most Requested",
    featured: true,
  },
  {
    n: "02",
    Icon: Target,
    title: "FROM VISION TO VICTORY",
    subtitle:
      "How to turn an idea, dream, or calling into focused action and measurable progress.",
  },
  {
    n: "03",
    Icon: Heart,
    title: "FAITH, RESILIENCE, AND REINVENTION",
    subtitle:
      "How to overcome setbacks, rebuild confidence, and move forward with faith and determination.",
  },
  {
    n: "04",
    Icon: Crown,
    title: "PURPOSE, LEADERSHIP, AND LEGACY",
    subtitle:
      "Helping individuals and organizations lead with clarity, impact, and a greater sense of purpose.",
  },
];

const SpeakerTools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="topics" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-900/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-yellow-400 mb-3">
            Signature Topics
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            Featured Speaking Topics
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Core talks Wali delivers to conferences, companies, schools, and
            faith-based audiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <motion.article
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                topic.featured
                  ? "bg-gradient-to-br from-blue-600/25 to-yellow-600/15 border-yellow-400/50 shadow-xl shadow-yellow-500/10"
                  : "bg-white/5 border-blue-500/20 hover:border-blue-400/40 hover:bg-white/[0.07]"
              }`}
            >
              {/* Icon + faded number */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    topic.featured
                      ? "bg-yellow-400/20 text-yellow-300"
                      : "bg-blue-500/15 text-blue-300"
                  }`}
                >
                  <topic.Icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <span className="text-4xl font-extrabold leading-none text-white/10 group-hover:text-white/20 transition-colors">
                  {topic.n}
                </span>
              </div>

              {topic.tag && (
                <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-black bg-yellow-400 px-3 py-1 rounded-full mb-4">
                  {topic.tag}
                </span>
              )}

              <h3
                className={`text-xl font-bold mb-3 ${
                  topic.featured ? "text-yellow-300" : "text-white"
                }`}
              >
                {topic.title}
              </h3>

              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {topic.subtitle}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakerTools;
