/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */

'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import instance from '../../../lib/axiosInstance';
import AuthGard from '../../../components/AuthGard';

const dashboardMenus = [
  {
    name: 'Audience',
    link: '/audience',
  },
];

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const logout = async () => {
    localStorage.removeItem('token');

    try {
      await instance.post('/user/logout');
      router.push('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthGard>
      <div className="flex flex-col md:flex-row">
        {/* Mobile toggle button */}
        <button
          className="md:hidden p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar */}
        <div
          className={`
          fixed top-0 left-0 bottom-0 min-h-[100vh] w-64 bg-gray-800 text-white p-4 z-40
          transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 md:flex md:flex-col
        `}
        >
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <nav className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-4">
              {dashboardMenus?.map((menu, index) => (
                <Link
                  href={`/dashboard${menu?.link}`}
                  className="hover:text-gray-300"
                  key={index}
                >
                  {menu?.name}
                </Link>
              ))}
            </div>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-200"
            >
              Logout
            </button>
          </nav>
        </div>

        {/* Overlay (mobile only) */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 p-6 ml-0 transition-all duration-300 max-h-[100vh] overflow-x-auto">
          {children}
        </div>
      </div>
    </AuthGard>
  );
};

export default DashboardLayout;
