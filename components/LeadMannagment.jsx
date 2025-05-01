'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';
import styles from '../styles';
import instance from '../lib/axiosInstance';

const LeadMagnetForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await instance.post('/audience/create', formData); // Replace with your actual endpoint
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <motion.div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative z-50`}
    >
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="bg-[#1a1a1a] rounded-2xl p-6 lg:p-10 text-center space-y-5 shadow-lg text-white">
          {!submitted ? (
            <>
              <div className="space-y-1">
                <p className="text-sm font-light tracking-wider text-gray-300">MELODY MORGAN FOX</p>
                <p className="text-sm font-semibold text-purple-400 tracking-wider uppercase">Hustle to Wealth</p>
                <p className="text-3xl italic font-semibold text-purple-500">presents</p>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold">
                10 STEPS TO MY FIRST MILLIONS
              </h2>
              <p className="text-gray-400 text-base max-w-xl mx-auto">
                Enter your information below to get instant access to the Free guide.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="w-full bg-purple-400 hover:bg-purple-500 text-black font-bold py-2 px-4 rounded-md transition-colors"
                >
                  DOWNLOAD NOW!
                </button>
              </form>
            </>
          ) : (
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-purple-400">Thank You!</h2>
              <p className="text-gray-300 max-w-md mx-auto">
                Your free guide is on its way. Please check your inbox!
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LeadMagnetForm;
