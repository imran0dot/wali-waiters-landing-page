/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import React, { useEffect, useState } from 'react';
import instance from '../../../../lib/axiosInstance';

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const limit = 10;
  const [totalPages, setTotalPages] = useState(1);

  const token = localStorage.getItem('token');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await instance.get('/audiences', {
        headers: { authorization: token },
        params: { page, limit },
        withCredentials: true,
      });

      setUserData(response?.data?.data || []);
      setTotalPages(response?.data?.pagination?.totalPages || 1);
    } catch (error) {
      console.error('Error fetching audience:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="p-6">
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        {loading ? (
          <div className="p-4 text-center text-gray-500">Loading...</div>
        ) : (
          <>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-6 py-3 text-sm font-semibold text-gray-600">Name</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-600">Email</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-600">Created At</th>
                </tr>
              </thead>
              <tbody>
                {userData.length > 0 ? (
                  userData.map((user, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-6 py-4 text-sm text-gray-700">{user.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{user.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {new Date(user.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between p-4 border-t bg-gray-50">
              <button
                onClick={handlePrevPage}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
              >
                Previous
              </button>

              <span className="text-sm text-gray-700">
                Page {page} of {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={page === totalPages}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserTable;
