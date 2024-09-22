import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const SignUpPage = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    policyAccepted: false,
    newsletter: false,
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = 'First Name is required';
    if (!form.lastName) newErrors.lastName = 'Last Name is required';
    if (!form.username) newErrors.username = 'Username is required';
    if (!validateEmail(form.email)) newErrors.email = 'Invalid email address';
    if (form.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!form.policyAccepted) newErrors.policyAccepted = 'You must accept the terms and conditions';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form
      alert('Form submitted successfully');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Image/Background Column */}
      <div className="w-1/2 hidden lg:block bg-gradient-to-tr from-red-500 to-red-800 relative">
        <img
          src="/bg1.png"
          alt="Background"
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform!</h1>
          <p className="text-lg font-light">Join us and start your journey today.</p>
        </div>
      </div>

      {/* Right Form Column */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-10">
        <motion.div
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">Create Your Account</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-lg font-medium text-gray-700">First Name</label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>

            {/* Username */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Username</label>
              <input
                type="text"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            {/* Accept Terms */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={form.policyAccepted}
                onChange={(e) => setForm({ ...form, policyAccepted: e.target.checked })}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <span className="text-gray-700">
                I accept the{' '}
                <a href="/terms" className="text-red-600 underline">
                  terms and conditions
                </a>
                .
              </span>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={form.newsletter}
                onChange={(e) => setForm({ ...form, newsletter: e.target.checked })}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <span className="text-gray-700">Sign up for our newsletter</span>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>

            {/* Forgot Password */}
            <div className="text-center mt-4">
              <a href="/forgot-password" className="text-red-600 underline hover:text-red-800">
                Forgot password?
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUpPage;
