import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 w-96"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-2xl font-bold text-red-600 mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700" htmlFor="password">Password</label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              className="absolute right-2 top-[69%] transform -translate-y-1/2 text-gray-600 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          <motion.button
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-300"
            type="submit"
            whileHover={{ scale: 1.05 }}
          >
            Login
          </motion.button>
        </form>
        {/* Forgot Password */}
        <div className="text-center mt-4">
              <a href="/forgot-password" className="text-red-600 underline hover:text-red-800">
                Forgot password?
              </a>
            </div>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="/sign-up" className="text-red-600 hover:underline">Sign Up</a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
