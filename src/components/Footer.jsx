import React from 'react'; 
import { FaLinkedin, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  // Define the dashboard routes where the footer should be hidden
  const dashboardRoutes = [
    '/dashboard', 
    '/profile', 
    '/tasks', 
    '/wallets', 
    '/transactions', 
    '/settings', 
    '/notifications'
  ];

  // Check if the current route is a dashboard route
  const isDashboardRoute = dashboardRoutes.includes(location.pathname);

  // Conditionally render the footer only on non-dashboard routes
  if (isDashboardRoute) {
    return null;
  }

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-10">
          
          {/* About Us Section */}
          <div className="mb-6 md:mb-0 w-full md:w-1/3">
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-sm leading-relaxed">
              We are committed to providing exceptional services to our clients. Our team of experts is dedicated to ensuring your success through innovative solutions and unparalleled support.
            </p>
          </div>
          
          {/* Contact Us Section */}
          <div className="mb-6 md:mb-0 w-full md:w-1/3">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-xl" /> 
              <a href="mailto:contact@yourdomain.com" className="hover:underline">contact@yourdomain.com</a>
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2 text-xl" /> 
              <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
            </p>
          </div>
          
          {/* Follow Us Section */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                <FaLinkedin className="mr-1 text-xl" /> LinkedIn
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                <FaTwitter className="mr-1 text-xl" /> Twitter
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                <FaInstagram className="mr-1 text-xl" /> Instagram
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Copyright Section */}
        <div className="mt-10 border-t border-gray-600 pt-6 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
