import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// SPEAKING photos — genuine shots of Wali speaking on stage.
// These come FIRST (before any social/event photos), per the page spec.
// Upload more speaking photos to /public/speaking/ and add them here
// (target: 4–6 strong stage photos).
const speakingPhotos = [
  { src: "/speaking/wali-speaking-2.jpg", title: "Onstage Keynote" },
  { src: "/speaking/wali-speaking-1.jpg", title: "Addressing the Audience" },
];

// SOCIAL / EVENT photos — placed AFTER the speaking photos.
const eventPhotos = [
  { src: "/gallery/1.jpeg", title: "Events & Appearances" },
  { src: "/gallery/2.jpeg", title: "With Industry Leaders" },
  { src: "/gallery/4.jpeg", title: "On the Red Carpet" },
  { src: "/gallery/5.jpeg", title: "Community & Charity" },
  { src: "/gallery/6.jpeg", title: "Special Events" },
  { src: "/gallery/7.jpeg", title: "With Attendees & Friends" },
];

const Photo = ({ img, i, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
    transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
    className="mb-5 break-inside-avoid relative rounded-2xl overflow-hidden group"
  >
    <Image
      src={img.src}
      alt={`Wali Waiters — ${img.title}`}
      width={800}
      height={600}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="w-full h-auto rounded-2xl"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
      <span className="text-white font-medium p-4 text-sm">{img.title}</span>
    </div>
  </motion.div>
);

const SpeakerPhotos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="speaking-photos"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/20 via-blue-900/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* SPEAKING HIGHLIGHTS — first & most prominent */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
            Speaking Highlights
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Moments from the stage — keynotes, audiences, and events where Wali
            delivers his message.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 gap-5 mb-20">
          {speakingPhotos.map((img, i) => (
            <Photo key={img.src} img={img} i={i} inView={isInView} />
          ))}
        </div>

        {/* EVENT & COMMUNITY — after speaking */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            Event &amp; Community
          </h3>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Highlights from red carpets, special events, and appearances.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {eventPhotos.map((img, i) => (
            <Photo key={img.src} img={img} i={i} inView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakerPhotos;
