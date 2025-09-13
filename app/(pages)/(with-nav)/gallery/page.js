"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const SpeakerGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    { src: "/gallery/1.jpeg", title: "Keynote Inspiration" },
    { src: "/gallery/2.jpeg", title: "Engaging With Leaders" },
    { src: "/gallery/4.jpeg", title: "Youth Empowerment" },
    { src: "/gallery/5.jpeg", title: "Corporate Retreats" },
    { src: "/gallery/6.jpeg", title: "Global Conferences" },
    { src: "/gallery/7.jpeg", title: "Team Collaboration" },
    { src: "/gallery/8.jpeg", title: "Motivational Sessions" },
    { src: "/gallery/9.jpeg", title: "Community Impact" },
    { src: "/gallery/10.jpeg", title: "Interactive Panels" },
    { src: "/gallery/11.jpeg", title: "Leadership Events" },
    { src: "/gallery/12.jpeg", title: "Empowering Change" },
    { src: "/gallery/13.jpeg", title: "Networking Moments" },
    { src: "/gallery/14.jpeg", title: "Breakthrough Insights" },
    { src: "/gallery/15.jpeg", title: "Audience Engagement" },
    { src: "/gallery/16.jpeg", title: "Celebrating Success" },
    { src: "/gallery/17.jpeg", title: "Inspiring Leaders" },
    { src: "/gallery/18.png", title: "Meaningful Connections" },
    { src: "/gallery/19.jpeg", title: "Visionary Conversations" },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/20 via-blue-900/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-16 flex flex-col justify-center items-center">
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold mb-6  inline bg-gradient-to-r from-blue-400 via-white to-yellow-400 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A glimpse into transformative events, powerful moments, and
            inspiring audiences from Wali’s journey.
          </p>
        </div>

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
