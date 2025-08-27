"use client";

/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const scrollToSection = (id) => {
  //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  //   setIsOpen(false);
  // };

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/speaker", name: "Speaker" },
    { path: "/your-life-and-live-your-truth", name: "Order Book" },
    { path: "/booking", name: "Booking" },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 transition-all"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            WALI WAITERS
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link href={item.path} key={item.name}>
                <button className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                  {item.name}
                </button>
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span
                className={`h-0.5 bg-white transition-all ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-white transition-all ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-white transition-all ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden py-4 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <Link href={item.path} key={item.name}>
                <button className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                  {item.name}
                </button>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
