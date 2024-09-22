import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20">
      <motion.h2
        className="text-4xl font-bold text-start mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full border rounded-lg p-2"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          className="bg-gray-800 text-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
          <p className="mb-2"><strong>Email:</strong> contact@yourdomain.com</p>
          <p className="mb-2"><strong>Phone:</strong> +1 (234) 567-890</p>
          <p className="mb-2"><strong>Address:</strong> 123 Your Street, Your City, Your Country</p>
          <p className="my-4"><strong>Follow us on LinkedIn:</strong></p>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
            LinkedIn Profile
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
