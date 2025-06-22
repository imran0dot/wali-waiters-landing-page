/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */

"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { toast } from "sonner";
import instance from "../../../../lib/axiosInstance";

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

  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const onChangeInput = (event) => {
    setBookingData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await instance.post(
        "/booking/create-booking",
        bookingData
      );
      if (response.data.success) {
        toast.success(
          "Thank you for your interest in booking Wali! We’ll be in touch within 48 hours."
        );
        setBookingData({
          name: "",
          email: "",
          phone: "",
          organizationOrEventName: "",
          location: "",
          dateOfEvent: "",
          estimatedBudget: "",
          message: "",
        });
        setIsSubmitted(true);
      }
    } catch (err) {
      if (err?.code) {
        toast.error(err.message);
      }
    }
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
            {!isSubmitted && (
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Book Your Event
              </h3>
            )}
            {isSubmitted ? (
              <div className="text-white p-8  max-w-xl mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
                <p className="text-lg text-gray-300">
                  Thank you for your interest in booking{" "}
                  <span className="text-indigo-400 font-medium">Wali</span>!{" "}
                  <br />
                  We’ll be in touch within{" "}
                  <span className="font-semibold">48 hours</span>.
                </p>
              </div>
            ) : (
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
                    required
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
                  <option className="text-gray-700" value="Under $1K">
                    Under $1K
                  </option>
                  <option className="text-gray-700" value="$1K–$3K">
                    $1K–$3K
                  </option>
                  <option className="text-gray-700" value="$3K–$5K">
                    $3K–$5K
                  </option>
                  <option className="text-gray-700" value="$5K+">
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
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
