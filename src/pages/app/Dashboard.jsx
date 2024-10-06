import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
    // Animation variants for the card entrance
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main className=" mb-16 p-3 w-full overflow-auto">
            <div id="content">
                <h1 className="text-3xl dark:text-white font-bold mb-6">Welcome to the Dashboard!</h1>
                <div id="dashboard" className="section">
                    <div className="flex justify-between items-center">
                        <h2 className="md:text-3xl dark:text-white text-2xl font-bold mb-6">Dashboard Overview</h2>
                        <span className="-mt-5 pr-4 md:pr-8">
                            <i className="fa fa-bell text-xl md:text-lg" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                        {/* Balance Card */}
                        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.5 }} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">Balance</h3>
                            <p className="text-xl md:text-2xl font-bold">$500.00</p>
                        </motion.div>

                        {/* Wallets Connected Card */}
                        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.1 }} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">Wallets Connected</h3>
                            <p className="text-xl md:text-2xl font-bold">3 Wallets</p>
                        </motion.div>

                        {/* Referrals Card */}
                        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.2 }} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">Referrals</h3>
                            <p className="text-xl md:text-2xl font-bold">10 Referrals</p>
                        </motion.div>

                        {/* Membership Status Card */}
                        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.3 }} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">Membership Status</h3>
                            <p className="text-xl md:text-2xl font-bold">Premium</p>
                        </motion.div>

                        {/* Tasks Allocated */}
                        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.4 }} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">Tasks Allocated</h3>
                            <p className="text-xl md:text-2xl font-bold">5 Tasks</p>
                        </motion.div>

                        {/* Tasks Pending */}
                        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.5 }} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">Tasks Pending</h3>
                            <p className="text-xl md:text-2xl font-bold">2 Tasks</p>
                        </motion.div>

                        {/* Tasks Completed */}
                        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.6 }} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">Tasks Completed</h3>
                            <p className="text-xl md:text-2xl font-bold">3 Tasks</p>
                        </motion.div>
                    </div>

                    {/* Membership Plans Section */}
                    <div className='flex  dark:text-white mt-12 mb-6 justify-between item-center pr-2'><h2 className="text-2xl font-bold">Membership Plans</h2>
                    <a href="#" className='mt-1 text-red-600' >View more ...</a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Membership Card 1 */}
                        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.5 }} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-gray-800 dark:bg-red-800 text-white p-6">
                                <h3 className="text-xl font-semibold">Basic Plan</h3>
                            </div>
                            <div className="p-6 flex-col h-52 flex justify-between">
                                <div>
                                    <ul className="list-disc ml-4 mb-6">
                                        <li>Level 1 - $10/month</li>
                                        <li>Level 2 - $15/month</li>
                                    </ul>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="#basic-details" className="text-red-500 hover:underline">Read More</a>
                                    <button className="px-4 py-2 bg-red-500 text-white rounded dark:bg-gray-800 dark:hover:bg-gray-500 hover:bg-red-600">Subscribe</button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Membership Card 2 */}
                        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.1 }} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-gray-800 dark:bg-red-800 text-white p-6">
                                <h3 className="text-xl font-semibold">Standard Plan</h3>
                            </div>
                            <div className="p-6 flex-col h-52 flex justify-between">
                                <div>
                                    <ul className="list-disc ml-4 mb-6">
                                        <li>Level 1 - $20/month</li>
                                        <li>Level 2 - $25/month</li>
                                        <li>Level 3 - $30/month</li>
                                    </ul>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="#standard-details" className="text-red-500 hover:underline">Read More</a>
                                    <button className="px-4 py-2 bg-red-500 text-white rounded dark:bg-gray-800 dark:hover:bg-gray-500 hover:bg-red-600">Subscribe</button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Membership Card 3 */}
                        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.2 }} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-gray-800 dark:bg-red-800 text-white p-6">
                                <h3 className="text-xl font-semibold">Premium Plan</h3>
                            </div>
                            <div className="p-6 flex-col h-52 flex justify-between">
                                <div>
                                    <ul className="list-disc ml-4 mb-6">
                                        <li>Level 1 - $40/month</li>
                                        <li>Level 2 - $50/month</li>
                                        <li>Level 3 - $60/month</li>
                                        <li>Level 4 - $70/month</li>
                                    </ul>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="#premium-details" className="text-red-500 hover:underline">Read More</a>
                                    <button className="px-4 py-2 bg-red-500 text-white rounded dark:bg-gray-800 dark:hover:bg-gray-500 hover:bg-red-600">Subscribe</button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Remaining Sections */}
                {/* Bio Update Section */}
                <div id="bio" className="section hidden">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-bold mb-6">Update Profile</h2>
                        <span className="-mt-5 pr-8">
                            <i className="fa fa-bell text-lg" aria-hidden="true"></i>
                        </span>
                    </div>
                    <form action="/update-bio" method="POST" className="bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input type="text" id="name" name="name" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="bio" className="block text-gray-700">Bio</label>
                            <textarea id="bio" name="bio" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" rows="4"></textarea>
                        </div>
                        <button type="submit" className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded dark:bg-gray-800 dark:hover:bg-gray-500 hover:bg-red-600">Update Profile</button>
                    </form>
                </div>

                {/* Membership Registration Section */}
                <div id="membership-registration" className="section hidden">
                    <h2 className="text-3xl font-bold mb-6">Membership Registration</h2>
                    <form action="/register-membership" method="POST" className="bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="plan" className="block text-gray-700">Select Plan</label>
                            <select id="plan" name="plan" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                                <option value="basic">Basic Plan</option>
                                <option value="standard">Standard Plan</option>
                                <option value="premium">Premium Plan</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="payment" className="block text-gray-700">Payment Method</label>
                            <select id="payment" name="payment" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                                <option value="credit">Credit Card</option>
                                <option value="paypal">PayPal</option>
                                <option value="bank">Bank Transfer</option>
                            </select>
                        </div>
                        <button type="submit" className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded dark:bg-gray-800 dark:hover:bg-gray-500 hover:bg-red-600">Register</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
