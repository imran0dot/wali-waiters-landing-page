"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import instance from "../../../lib/axiosInstance";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const login = await instance.post("/auth/login", { ...form });

      console.log("======== Login data =========");
      console.log(login?.data?.data);

      if (login?.data?.data?.accessToken) {
        localStorage.setItem("token", `Bearer ${login?.data?.data?.accessToken}`);
        router.push("/dashboard");
      }
      console.log(login?.data?.user?.userId);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
    console.log("Login attempt:", form);
    // Add actual login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Login</h2>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="block w-full border border-gray-300 rounded-md p-2 pr-10 shadow-sm focus:ring focus:ring-indigo-200"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          disabled={loading}
          type="submit"
          className={`w-full ${
            loading ? "bg-slate-200" : "bg-indigo-600  hover:bg-indigo-700"
          }  text-white py-2 rounded-md flex gap-3 justify-center items-center`}
        >
          Sign In
          {loading && <Loader className="animate-spin" />}
        </button>
      </form>
    </div>
  );
};

export default Login;
