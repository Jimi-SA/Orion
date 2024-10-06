// src/components/Sidebar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaTasks, FaWallet, FaBell,FaPowerOff } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex w-64 dark:bg-white dark:text-gray-800 bg-gray-800 shadow-xl text-white flex-col p-6 fixed h-full">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='bg-red-800'>
        <h1 className="text-3xl text-center dark:text-white py-4 font-bold mb-4">Orion</h1>
        </div>
        <nav className="space-y-4 pb-2">
          <NavItem to="/dashboard" label="Dashboard" icon={<FaHome />} />
          <NavItem to="/profile" label="Profile" icon={<FaUser />} />
          <NavItem to="/tasks" label="Tasks" icon={<FaTasks />} />
          <NavItem to="/wallets" label="Wallet"  icon={<FaWallet />} />
          <NavItem to="/notifications" label="Notifications" icon={<FaBell />} />
        </nav>
      </motion.div>
      {/* Company Info Section */}
      <div className="mb-24 border-t py-4 ml-2 dark:text-gray-800 border-gray-600 text-white text-sm">
            <p className="mb-2">Orion Inc.</p>
            <p className="mb-2">Empowering Innovation and Excellence.</p>
            <p className="mb-1">Contact us: support@orion.com</p>
            <p>&copy; 2024 Orion Inc. All rights reserved.</p>
          </div>
    </aside>
  );
};

const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 
      ${isActive ? 'md:bg-gray-700 bg-gray-500 text-red-600 shadow-md' : 'hover:bg-gray-700 dark:hover:text-white hover:text-red-400'}`
    }
  >
    <span className="text-2xl">{icon}</span>
    <span className="hidden lg:block">{label}</span>
  </NavLink>
);


// src/components/NavBar.jsx

export const BottomNavBar = () => (
  <nav className="lg:hidden fixed bottom-0 w-full shadow-2xl rounded-t-xl bg-gray-900 dark:bg-white dark:text-gray-900 text-white flex justify-around py-4 ">
    <NavItem to="/dashboard" icon={<FaHome />} />
    <NavItem to="/tasks" icon={<FaTasks />} />
    <NavItem to="/wallets" icon={<FaWallet />} />
    <NavItem to="/profile" icon={<FaUser />} />
    <NavItem to="/notifications" icon={<FaBell />} />
  </nav>
);

export const FloatingProfile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear user data and redirect to login page
    console.log('Logout clicked');
    // Example:
    // auth.logout();
    navigate('/login');
  };

  return (
    <div className=" absolute right-4 top-4 md:top-7  md:flex-row space-x-4 md:space-x-6 md:right-5 z-50 flex space-y-4">
      {/* Profile Photo */}
      <div className="relative group mt-3">
        <img
          src="https://via.placeholder.com/50" // Replace with your profile image URL
          alt="Profile"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white shadow-lg cursor-pointer"
        />
        {/* Tooltip on hover */}
        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
          Profile
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-colors duration-300"
        aria-label="Logout"
      >
        <FaPowerOff className="text-lg md:text-xl" />
        {/* Tooltip on hover */}
        <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 hidden group-hover:flex bg-gray-800 text-white text-xs rounded py-1 px-2">
          Logout
        </div>
      </button>
    </div>
  );
};
