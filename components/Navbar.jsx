/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/speaker", name: "Speaker" },
    { path: "/your-life-and-live-your-truth", name: "Order Book" },
    { path: "/booking", name: "Booking" },
    { path: "/projects", name: "Projects" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              WALI WAITERS
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link href={item.path} key={item.name}>
                <span className="cursor-pointer text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-yellow-400 transition duration-300 font-medium">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`h-0.5 w-6 bg-white rounded-sm transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white rounded-sm transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white rounded-sm transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden flex flex-col space-y-4 py-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <Link
                  href={item.path}
                  key={item.name}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="block cursor-pointer text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-yellow-400 transition duration-300 font-medium">
                    {item.name}
                  </span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
