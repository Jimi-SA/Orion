// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaTasks, FaWallet, FaBell, FaCogs, FaExchangeAlt } from 'react-icons/fa';

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
      ${isActive ? 'bg-gray-700 text-red-600 shadow-md' : 'hover:bg-gray-700 dark:hover:text-white hover:text-red-400'}`
    }
  >
    <span className="text-2xl">{icon}</span>
    <span className="hidden lg:block">{label}</span>
  </NavLink>
);


// src/components/NavBar.jsx

export const BottomNavBar = () => (
  <nav className="lg:hidden fixed bottom-0 w-full shadow-2xl bg-gray-900 text-white flex justify-around py-4 ">
    <NavItem to="/dashboard" icon={<FaHome />} />
    <NavItem to="/tasks" icon={<FaTasks />} />
    <NavItem to="/wallets" icon={<FaWallet />} />
    <NavItem to="/profile" icon={<FaUser />} />
    <NavItem to="/notifications" icon={<FaBell />} />
  </nav>
);
