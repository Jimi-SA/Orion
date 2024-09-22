import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for mobile menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Define the dashboard routes where the navbar should be hidden
  const dashboardRoutes = ['/dashboard', '/profile', '/tasks', '/wallets', '/transactions', '/settings'];

  // Check if the current route is a dashboard route
  const isDashboardRoute = dashboardRoutes.includes(location.pathname);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  // Conditionally render the navbar only on non-dashboard routes
  if (isDashboardRoute) {
    return null;
  }

  return (
    <nav className="bg-red-900 z-50 text-white">
      <div className="container mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Orion
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden scale-95 pt-1 md:flex space-x-6">
          <motion.div
            className="space-x-6 text-lg font-medium"
            initial="hidden"
            animate="visible"
            variants={menuVariants}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            <Link to="/" className="hover:border-b-2 pb-1 border-white hover:text-gray-500 transition duration-300">
              Home
            </Link>
            <Link to="/services" className="hover:border-b-2 pb-1 border-white hover:text-gray-500 transition duration-300">
              Services
            </Link>
            <Link to="/about" className="hover:border-b-2 pb-1 border-white hover:text-gray-500 transition duration-300">
              About
            </Link>
            <Link to="/contact" className="hover:border-b-2 pb-1 border-white hover:text-gray-500 transition duration-300">
              Contact
            </Link>
            <Link to="/sign-up" className="hover:text-black hover:ring-white text-red-800 text-base bg-white px-2 py-1 rounded-lg transition duration-300">
              Sign up
            </Link>
            <Link to="/login" className="hover:text-white bg-red-500 px-3 py-1 rounded-lg transition duration-300">
              Login
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <FiX className="text-3xl text-white hover:text-red-200" />
            ) : (
              <FiMenu className="text-3xl text-white hover:text-red-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden fixed right-0 w-full h-full bg-gray-800 py-4 px-6 flex flex-col justify-between"
          initial={{ opacity: 0, x: '100%' }} // Slide from the right
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }} // Slide out to the right
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-2">
            <Link
              to="/"
              className="block text-lg font-medium text-white hover:bg-gray-700 hover:border pb-1 px-3 border-white/20 py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block text-lg font-medium text-white hover:bg-gray-700 hover:border pb-1 px-3 border-white/20 py-2"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block text-lg font-medium text-white hover:bg-gray-700 hover:border pb-1 px-3 border-white/20 py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-lg font-medium text-white hover:bg-gray-700 hover:border pb-1 px-3 border-white/20 py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/sign-up"
              className="block text-lg font-medium text-red-500 hover:bg-white hover:text-red-500 py-2 px-4 mt-3 bg-white rounded-lg transition"
              onClick={toggleMenu}
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="block text-lg font-medium text-white hover:bg-red-500 hover:text-white py-2 px-4 mt-3 bg-red-500 rounded-lg transition"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </div>

          {/* Company Info Section */}
          <div className="mb-24 border-t py-4 ml-2 border-gray-600 text-white text-lg">
            <p className="mb-2">Orion Inc.</p>
            <p className="mb-2">Empowering Innovation and Excellence.</p>
            <p className="mb-1">Contact us: support@orion.com</p>
            <p>&copy; 2024 Orion Inc. All rights reserved.</p>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
