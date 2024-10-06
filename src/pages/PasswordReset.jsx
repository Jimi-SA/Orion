import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdMail } from 'react-icons/md'; // Mail icon
import { FaCheckCircle, FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordReset = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // To track the current step
  const [resetSuccess, setResetSuccess] = useState(false); // To track reset success

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleResetRequest = (e) => {
    e.preventDefault();
    console.log(`Reset email sent to: ${email}`);
    setStep(2);
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    console.log(`New password set for: ${email}`);
    setStep(4);
    setResetSuccess(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 w-96 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Reset Your Password</h2>
            <form onSubmit={handleResetRequest}>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">Email</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <motion.button
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                type="submit"
                whileHover={{ scale: 1.05 }}
              >
                Send Reset Link
              </motion.button>
            </form>
          </>
        )}

        {step === 2 && (
          <div className="flex flex-col items-center">
            <MdMail className="text-gray-600 mb-4" size={50} />
            <h2 className="text-xl font-bold text-gray-800 mb-4">Email Sent</h2>
            <p className="text-gray-600 mb-6">
              A password reset link has been sent to your email. Please check your inbox.
            </p>
            <motion.button
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
              onClick={() => setStep(3)} // Move to Step 3
            >
              Proceed to Reset Password
            </motion.button>
          </div>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Set New Password</h2>
            <form onSubmit={handlePasswordReset}>
              <div className="mb-4 relative">
                <label className="block text-gray-700" htmlFor="newPassword">New Password</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  type={passwordVisible ? 'text' : 'password'}
                  id="newPassword"
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                {/* <button
                  type="button"
                  className="absolute right-2 top-[69%] transform -translate-y-1/2 text-gray-600 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button> */}
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  type={passwordVisible ? 'text' : 'password'}
                  id="confirmPassword"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                type="submit"
                whileHover={{ scale: 1.05 }}
              >
                Reset Password
              </motion.button>
            </form>
          </>
        )}

        {step === 4 && resetSuccess && (
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-green-600 mb-4" size={50} />
            <h2 className="text-xl font-bold text-gray-800 mb-4">Password Reset Successful</h2>
            <p className="text-gray-600 mb-6">
              You can now log in with your new password.
            </p>
            <motion.button
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
              onClick={() => (window.location.href = '/login')} // Redirect to login
            >
              Go to Login
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PasswordReset;
