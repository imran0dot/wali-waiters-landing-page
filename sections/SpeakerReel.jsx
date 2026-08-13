import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// SPEAKER_REEL — local speaker reel video.
// To swap the clip, change the <source src> below (and the poster if desired).
const SpeakerReel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="speaker-reel" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-900/20 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            Speaker Reel
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See Wali in action — the energy, storytelling, and connection that
            define every talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl overflow-hidden border border-blue-400/20 shadow-2xl"
        >
          <video
            controls
            playsInline
            preload="metadata"
            poster="/speaking/wali-speaking-1.jpg"
            className="w-full aspect-video bg-black"
          >
            <source src="/speaking/wali-speaker-reel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakerReel;
