"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    organizationOrEventName: "",
    location: "",
    dateOfEvent: "",
    estimatedBudget: "",
    message: "",
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const onChangeInput = (event) => {
    setBookingData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(bookingData);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-900/20 to-transparent" />
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
            Book Wali Today
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="backdrop-blur-md bg-gradient-to-r from-blue-600/20 to-yellow-600/20 rounded-3xl border border-blue-400/30 p-12 max-w-4xl mx-auto mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Book Your Event
            </h3>
            <form
              onSubmit={onSubmit}
              className=" mx-auto bg-transparent p-5 rounded-2xl shadow-lg space-y-5"
            >
              {/* Text Inputs */}
              {[
                { name: "name", placeholder: "Your Name" },
                { name: "email", placeholder: "Your Email", type: "email" },
                { name: "phone", placeholder: "Your Phone", type: "tel" },
                {
                  name: "organizationOrEventName",
                  placeholder: "Organization / Event Name",
                },
                { name: "location", placeholder: "Location" },
                {
                  name: "dateOfEvent",
                  placeholder: "Date of Event",
                  type: "date",
                },
              ].map(({ name, placeholder, type = "text" }) => (
                <input
                  key={name}
                  type={type}
                  name={name}
                  value={bookingData[name]}
                  onChange={onChangeInput}
                  placeholder={placeholder}
                  style={{ borderColor: "#597dc55c" }}
                  className="w-full p-3 bg-transparent border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}

              {/* Estimated Budget Dropdown */}
              <select
                name="estimatedBudget"
                value={bookingData.estimatedBudget}
                onChange={onChangeInput}
                style={{ borderColor: "#597dc55c" }}
                className="w-full p-3 bg-transparent text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option className="text-gray-700" value="">
                  Estimated Budget (Optional)
                </option>
                <option className="text-gray-700" value="under-1k">
                  Under $1K
                </option>
                <option className="text-gray-700" value="1k-3k">
                  $1K–$3K
                </option>
                <option className="text-gray-700" value="3k-5k">
                  $3K–$5K
                </option>
                <option className="text-gray-700" value="5k-plus">
                  $5K+
                </option>
              </select>

              {/* Message */}
              <textarea
                name="message"
                value={bookingData.message}
                onChange={onChangeInput}
                placeholder="Message"
                rows={4}
                className="w-full p-3 border bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
