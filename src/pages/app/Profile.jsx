import React from 'react';

const Profile = () => {
    return (
        <div id="profile" className="section">
            {/* Profile Update Section */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Update Profile</h2>
                <span className="-mt-5 pr-8">
                    <i className="fa fa-bell text-lg" aria-hidden="true"></i>
                </span>
            </div>
            <form action="/update-profile" method="POST" className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="bio" className="block text-gray-700">Bio</label>
                    <textarea id="bio" name="bio" rows="4" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"></textarea>
                </div>
                <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md">Update Bio</button>
            </form>

            {/* Authentication Details Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Update Auth Details</h2>
                <form action="/update-auth" method="POST" className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
                    </div>
                    <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md">Update Auth Details</button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
