import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const SpeakerGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    { src: "/gallery1.jpg", title: "Keynote Inspiration" },
    { src: "/gallery2.jpg", title: "Engaging With Leaders" },
    { src: "/gallery3.jpg", title: "Transformative Workshops" },
    { src: "/gallery4.jpg", title: "Youth Empowerment" },
    { src: "/gallery5.jpg", title: "Corporate Retreats" },
    { src: "/gallery6.jpg", title: "Global Conferences" },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/20 via-blue-900/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A glimpse into transformative events, powerful moments, and
            inspiring audiences from Wali’s journey.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden group shadow-lg border border-blue-400/20"
            >
              {/* Image */}
              <Image
                src={img.src}
                alt={img.title}
                width={600}
                height={400}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 px-4 text-center">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakerGallery;
