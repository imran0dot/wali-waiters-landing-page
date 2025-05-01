/* eslint-disable react/button-has-type */
import React from 'react';

const Page = () => (
  <div className="min-h-screen  flex items-center justify-center p-6">
    <div className="p-8 rounded-lg w-full sm:w-96">
      <h1 className="text-4xl font-bold text-center text-teal-600 mb-6">
        Welcome to Your Dashboard!
      </h1>
      <p className="text-center text-gray-600 mb-4">
        We're excited to have you here. Let's get started with your personalized dashboard.
      </p>
      <div className="flex justify-center">
        <button className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400">
          Get Started
        </button>
      </div>
    </div>
  </div>
);

export default Page;
