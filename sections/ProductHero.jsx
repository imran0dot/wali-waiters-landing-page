'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
} from '../utils/motion';

const ProductHero = () => {
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [fromDetails, setFromDetails] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleInput = (event) => {
    setFromDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [event.target.name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email } = fromDetails;
    let hasError = false;
    const newErrors = {
      name: '',
      phone: '',
      email: '',
    };

    // Name validation
    if (!name || name.trim() === '') {
      newErrors.name = 'Please provide your name';
      hasError = true;
    }

    // Phone validation
    if (!phone || phone.trim() === '') {
      newErrors.phone = 'Please provide your phone number';
      hasError = true;
    } else if (!/^\d{10,15}$/.test(phone)) {
      newErrors.phone = 'Enter a valid phone number';
      hasError = true;
    }

    // Email validation
    if (!email || email.trim() === '') {
      newErrors.email = 'Please provide your email';
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email address';
      hasError = true;
    }

    // Update state based on validation
    setErrors(newErrors);

    if (hasError) return;

    // ✅ Redirect to Stripe Checkout
    window.location.href = 'https://buy.stripe.com/dRmcN4fVo4Zxbti2Qg8N200';

    // If all is valid
    console.log('Submitting form:', fromDetails);
    // Clear form or proceed with submission logic here
  };

  return (
    <section className={`${styles.yPaddings} sm:px-16 px-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        {/* IMAGE SECTION */}
        <motion.div
          variants={slideIn('left', 'tween', 0.3, 1)}
          className="relative flex-1"
        >
          <img
            src="/book_cover.jpeg"
            alt="cover"
            className="w-full h-auto object-cover rounded-3xl relative z-10 shadow-2xl"
          />
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <motion.h1
            variants={textVariant(1.1)}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
          >
            Transformational <span className="text-indigo-400"> Truths </span>
            <br />
          </motion.h1>
          <motion.p
            variants={textVariant(1.3)}
            className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
          >
            Book your pre order
          </motion.p>

          <motion.div className="w-full mt-5 p-6  rounded-2xl shadow-xl border border-gray-700">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <label className="text-gray-300 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  onChange={handleInput}
                  className="bg-[#2a2a2a] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-gray-300 text-sm font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  onChange={handleInput}
                  className="bg-[#2a2a2a] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-gray-300 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  onChange={handleInput}
                  className="bg-[#2a2a2a] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <button
                type="submit"
                className="mt-4 bg-indigo-600 hover:bg-indigo-500 transition-all text-white py-3 rounded-md font-semibold"
              >
                Pre-order Now
              </button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductHero;
