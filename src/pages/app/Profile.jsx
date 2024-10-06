import React, { useState } from 'react';
import { FaBell, FaUserCircle, FaTrash, FaSave, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Switch } from '@headlessui/react';

const Profile = () => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [enable2FA, setEnable2FA] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        // Handle profile update logic here
    };

    const handleAuthUpdate = (e) => {
        e.preventDefault();
        // Handle authentication details update here
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Proceed with the authentication update logic
    };

    const handleProfilePictureUpload = (e) => {
        const file = e.target.files[0];
        setProfilePicture(file);
    };

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto pb-16 md:pb-0 pt-2 px-1 md:px-0 md:py-8">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Profile Settings</h1>
                    </div>

                    {/* Profile Update Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-300">
                        <div className="flex items-center mb-6">
                            {profilePicture ? (
                                <img
                                    src={URL.createObjectURL(profilePicture)}
                                    alt="Profile"
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                            ) : (
                                <FaUserCircle className="w-16 h-16 text-gray-400 dark:text-gray-500 mr-4" />
                            )}
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Update Profile</h2>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleProfilePictureUpload}
                                    className="mt-2 text-sm text-gray-600 dark:text-gray-400"
                                />
                            </div>
                        </div>
                        <form onSubmit={handleProfileUpdate} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full mt-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
                                />
                            </div>
                            <div>
                                <label htmlFor="bio" className="block text-gray-700 dark:text-gray-300">Bio</label>
                                <textarea
                                    id="bio"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    rows="4"
                                    className="w-full mt-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    className="w-full mt-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
                                />
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-gray-700 dark:text-gray-300">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
                                />
                            </div>
                            <button
                                type="submit"
                                className="flex items-center justify-center bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300"
                            >
                                <FaSave className="mr-2" /> Update Profile
                            </button>
                        </form>
                    </div>

                    {/* Authentication Details Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-300">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Authentication Details</h2>
                        <form onSubmit={handleAuthUpdate} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full mt-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
                                />
                            </div>
                            <div className="relative">
                                <label htmlFor="password" className="block text-gray-700 dark:text-gray-300">Enter Old Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full mt-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute mt-7 inset-y-0 right-0 px-3 py-2 text-gray-500 focus:outline-none"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <div className="relative">
                                <label htmlFor="confirmPassword" className="block text-gray-700 dark:text-gray-300">Enter New Password</label>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="w-full mt-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 mt-7 right-0 px-3 py-2 text-gray-500 focus:outline-none"
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <div className="flex items-center">
                                <Switch
                                    checked={enable2FA}
                                    onChange={setEnable2FA}
                                    className={`${
                                        enable2FA ? 'bg-gray-600' : 'bg-gray-300'
                                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300`}
                                >
                                    <span
                                        className={`${
                                            enable2FA ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                                    />
                                </Switch>
                                <span className="ml-3 text-gray-700 dark:text-gray-300">Enable Two-Factor Authentication</span>
                            </div>
                            <button
                                type="submit"
                                className="flex items-center justify-center bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300"
                            >
                                <FaSave className="mr-2" /> Update Authentication
                            </button>
                        </form>
                    </div>

                    {/* Notifications Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-300">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Notifications</h2>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-700 dark:text-gray-300">Receive notifications</span>
                            <Switch
                                checked={notifications}
                                onChange={setNotifications}
                                className={`${
                                    notifications ? 'bg-gray-600' : 'bg-gray-300'
                                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300`}
                            >
                                <span
                                    className={`${
                                        notifications ? 'translate-x-6' : 'translate-x-1'
                                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                                />
                            </Switch>
                        </div>
                    </div>

                    {/* Account Deletion Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Delete Account</h2>
                        <p className="text-red-600 dark:text-red-400 mb-4">
                            Warning: This action cannot be undone. Once deleted, all your data will be permanently lost.
                        </p>
                        <form action="/delete-account" method="POST">
                            <button
                                type="submit"
                                className="flex items-center justify-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
                            >
                                <FaTrash className="mr-2" /> Delete Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;