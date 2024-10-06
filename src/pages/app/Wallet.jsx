import React from 'react';

const Wallet = () => {
  return (
    <div id="wallet" className="section ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Wallet</h2>
        <span className="-mt-5 pr-8">
          <i className="fa fa-bell text-lg transition-transform duration-300 hover:scale-110" aria-hidden="true"></i>
        </span>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
        <p className="text-lg mb-2">Your current balance is:</p>
        <p className="text-4xl font-bold text-green-600">$500.00</p>
        
        <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow transition duration-200 transform hover:scale-105">
            Add Funds
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow transition duration-200 transform hover:scale-105">
            Withdraw
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Wallet Addresses</h3>
        <ul id="wallet-list" className="list-disc pl-5 space-y-2">
          {/* Dynamically generated wallet items */}
          <li className="bg-gray-100 p-4 rounded-md shadow hover:shadow-md transition duration-200">
            0x123...abc
          </li>
          <li className="bg-gray-100 p-4 rounded-md shadow hover:shadow-md transition duration-200">
            0x456...def
          </li>
          <li className="bg-gray-100 p-4 rounded-md shadow hover:shadow-md transition duration-200">
            0x789...ghi
          </li>
          <li className="bg-gray-100 p-4 rounded-md shadow hover:shadow-md transition duration-200">
            0xabc...xyz
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow transition duration-200 transform hover:scale-105">
          View Transaction History
        </button>
      </div>
    </div>
  );
};


export default Wallet