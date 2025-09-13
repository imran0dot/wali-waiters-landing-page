"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const SpeakerGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    {
      src: "/gallery/havy_wait_champ.jpeg",
      title: "Big Time McClain, Former Heavyweight Champion",
    },
    {
      src: "/gallery/1.jpeg",
      title: "Vanilla Ice - Robert Van Winkle (Hip-Hop Artist)",
    },
    {
      src: "/gallery/2.jpeg",
      title: "Lamar Odom, former Los Angeles Laker",
    },
    {
      src: "/gallery/4.jpeg",
      title: "Damon Dash, Co-Founder of Roc-A-Fella Records",
    },
    {
      src: "/gallery/6.jpeg",
      title: "James Bond Gala",
    },
    {
      src: "/gallery/7.jpeg",
      title: "Philanthropist and Founder of Priceline and Ubid",
    },
    {
      src: "/gallery/10.jpeg",
      title: "Hip-hop artist Trina on 'The Competitive Edge With Montel Williams'",
    },
    {
      src: "/gallery/11.jpeg",
      title: "Red Carpet Event",
    },
    {
      src: "/gallery/12.jpeg",
      title: "Lito Sheppard - Former Philadelphia Eagle and Florida Gator",
    },
    {
      src: "/gallery/13.jpeg",
      title: "Cuba Gooding Jr., Academy Award-winning actor",
    },
    {
      src: "/gallery/16.jpeg",
      title: "Red Carpet Event",
    },
    {
      src: "/gallery/18.png",
      title: "Marc Randolph, Founder of Netflix",
    },
    {
      src: "/gallery/19.jpeg",
      title: "Steven Kotler, New York Times Best-Selling Author and Speaker",
    },
    {
      src: "/gallery/william-shatner.png",
      title: "William Shatner",
    },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/20 via-blue-900/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-16 flex flex-col justify-center items-center">
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-yellow-400 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A glimpse into transformative events, powerful moments, and
            inspiring audiences from Wali’s journey.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative break-inside-avoid rounded-2xl overflow-hidden group shadow-lg border border-blue-400/20"
            >
              <Image
                src={img.src}
                alt={img.title}
                width={600}
                height={400}
                className="object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
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
