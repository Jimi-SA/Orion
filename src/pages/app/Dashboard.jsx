// src/components/Dashboard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDollarSign, 
  FaWallet, 
  FaUsers, 
  FaUserCheck, 
  FaTasks, 
  FaHourglassHalf, 
  FaCheckCircle, 
  FaCrown 
} from 'react-icons/fa';

const Dashboard = () => {
    // Animation variants for the card entrance
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main className="mb-16 -mt-3 md:mt-0  w-full min-h-screen">
            <div id="content">
                <h1 className="md:text-3xl text-2xl dark:text-white font-bold mb-6 text-gray-800">Welcome to the Dashboard!</h1>
                <div id="dashboard" className="section">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="md:text-3xl dark:text-white text-2xl font-bold text-gray-800">Dashboard Overview</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-200"
                            aria-label="Notifications"
                        >
                            <i className="fa fa-bell text-xl md:text-lg" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Balance Card */}
                        <motion.div 
                            variants={cardVariants} 
                            initial="hidden" 
                            animate="visible" 
                            transition={{ duration: 0.5 }} 
                            className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
                        >
                            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                                <FaDollarSign className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Balance</h3>
                                <p className="text-xl md:text-2xl font-bold text-gray-900">$500.00</p>
                            </div>
                        </motion.div>

                        {/* Wallets Connected Card */}
                        <motion.div 
                            variants={cardVariants} 
                            initial="hidden" 
                            animate="visible" 
                            transition={{ duration: 0.5, delay: 0.1 }} 
                            className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
                        >
                            <div className="p-3 bg-green-100 rounded-full text-green-600">
                                <FaWallet className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Wallets Connected</h3>
                                <p className="text-xl md:text-2xl font-bold text-gray-900">3 Wallets</p>
                            </div>
                        </motion.div>

                        {/* Referrals Card */}
                        <motion.div 
                            variants={cardVariants} 
                            initial="hidden" 
                            animate="visible" 
                            transition={{ duration: 0.5, delay: 0.2 }} 
                            className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
                        >
                            <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                                <FaUsers className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Referrals</h3>
                                <p className="text-xl md:text-2xl font-bold text-gray-900">10 Referrals</p>
                            </div>
                        </motion.div>

                        {/* Membership Status Card */}
                        <motion.div 
                            variants={cardVariants} 
                            initial="hidden" 
                            animate="visible" 
                            transition={{ duration: 0.5, delay: 0.3 }} 
                            className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
                        >
                            <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                                <FaUserCheck className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Membership Status</h3>
                                <p className="text-xl md:text-2xl font-bold text-gray-900">Premium</p>
                            </div>
                        </motion.div>

                        {/* Tasks Allocated Card */}
                        <motion.div 
                            variants={cardVariants} 
                            initial="hidden" 
                            animate="visible" 
                            transition={{ duration: 0.5, delay: 0.4 }} 
                            className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
                        >
                            <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
                                <FaTasks className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Tasks Allocated</h3>
                                <p className="text-xl md:text-2xl font-bold text-gray-900">5 Tasks</p>
                            </div>
                        </motion.div>

                        {/* Tasks Pending Card */}
                        <motion.div 
                            variants={cardVariants} 
                            initial="hidden" 
                            animate="visible" 
                            transition={{ duration: 0.5, delay: 0.5 }} 
                            className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
                        >
                            <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                                <FaHourglassHalf className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Tasks Pending</h3>
                                <p className="text-xl md:text-2xl font-bold text-gray-900">2 Tasks</p>
                            </div>
                        </motion.div>

                        {/* Tasks Completed Card */}
                        <motion.div 
                            variants={cardVariants} 
                            initial="hidden" 
                            animate="visible" 
                            transition={{ duration: 0.5, delay: 0.6 }} 
                            className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
                        >
                            <div className="p-3 bg-teal-100 rounded-full text-teal-600">
                                <FaCheckCircle className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Tasks Completed</h3>
                                <p className="text-xl md:text-2xl font-bold text-gray-900">3 Tasks</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Membership Plans Section */}
                    <div className='flex dark:text-white mt-12 mb-6 justify-between items-center pr-2'>
                        <h2 className="text-2xl font-bold dark:text-white text-gray-800">Membership Plans</h2>
                        <a href="#" className='mt-1 text-red-600 hover:text-red-700 transition-colors duration-200'>View more...</a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Membership Card 1 */}
                        <motion.div 
                            variants={cardVariants} 
                            initial="hidden" 
                            animate="visible" 
                            transition={{ duration: 0.5 }} 
                            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                        >
                            <div className="bg-red-800 dark:bg-red-700 text-white p-6 flex items-center">
                                <FaCrown className="text-3xl mr-2" />
                                <h3 className="text-xl font-semibold">Basic Plan</h3>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <ul className="list-disc ml-4 mb-6 text-gray-700">
                                        <li>Level 1 - $10/month</li>
                                        <li>Level 2 - $15/month</li>
                                    </ul>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="#basic-details" className="text-red-600 hover:underline transition-colors duration-200">Read More</a>
                                    <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-red-700 transition-colors duration-200">Subscribe</button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Membership Card 2 */}
                        <motion.div 
                            variants={cardVariants} 
                            initial="hidden" 
                            animate="visible" 
                            transition={{ duration: 0.5, delay: 0.1 }} 
                            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                        >
                            <div className="bg-red-800 dark:bg-red-700 text-white p-6 flex items-center">
                                <FaCrown className="text-3xl mr-2" />
                                <h3 className="text-xl font-semibold">Standard Plan</h3>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <ul className="list-disc ml-4 mb-6 text-gray-700">
                                        <li>Level 1 - $20/month</li>
                                        <li>Level 2 - $25/month</li>
                                        <li>Level 3 - $30/month</li>
                                    </ul>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="#standard-details" className="text-red-600 hover:underline transition-colors duration-200">Read More</a>
                                    <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-red-700 transition-colors duration-200">Subscribe</button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Membership Card 3 */}
                        <motion.div 
                            variants={cardVariants} 
                            initial="hidden" 
                            animate="visible" 
                            transition={{ duration: 0.5, delay: 0.2 }} 
                            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                        >
                            <div className="bg-red-800 dark:bg-red-700 text-white p-6 flex items-center">
                                <FaCrown className="text-3xl mr-2" />
                                <h3 className="text-xl font-semibold">Premium Plan</h3>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <ul className="list-disc ml-4 mb-6 text-gray-700">
                                        <li>Level 1 - $40/month</li>
                                        <li>Level 2 - $50/month</li>
                                        <li>Level 3 - $60/month</li>
                                        <li>Level 4 - $70/month</li>
                                    </ul>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="#premium-details" className="text-red-600 hover:underline transition-colors duration-200">Read More</a>
                                    <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-red-700 transition-colors duration-200">Subscribe</button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );

};

export default Dashboard;
