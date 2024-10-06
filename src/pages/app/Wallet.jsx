import React, { useState, useEffect } from 'react';
import {
  FaBell,
  FaUserCircle,
  FaTrash,
  FaSave,
  FaEye,
  FaEyeSlash,
  FaPlus,
  FaArrowDown,
  FaArrowUp,
  FaHistory,
  FaEdit,
  FaShieldAlt,
} from 'react-icons/fa';
import { Switch } from '@headlessui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CRYPTOCURRENCIES = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', icon: <FaUserCircle /> },
  { id: 2, name: 'Ethereum', symbol: 'ETH', icon: <FaUserCircle /> },
  { id: 3, name: 'Litecoin', symbol: 'LTC', icon: <FaUserCircle /> },
  { id: 4, name: 'USDT', symbol: 'TRC 20', icon: <FaUserCircle /> },
];

const Wallet = () => {
  // State Management
  const [wallets, setWallets] = useState([
    { id: 1, crypto: 'Bitcoin', symbol: 'BTC', address: '0x123...abc', balance: 1.5, status: 'Active' },
    { id: 2, crypto: 'Ethereum', symbol: 'ETH', address: '0x456...def', balance: 10, status: 'Active' },
    { id: 3, crypto: 'Litecoin', symbol: 'LTC', address: '0x789...ghi', balance: 50, status: 'Inactive' },
    { id: 4, crypto: 'USDT', symbol: 'TRC 20', address: '0xabc...xyz', balance: 1000, status: 'Active' },
  ]);

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      crypto: 'Bitcoin',
      symbol: 'BTC',
      type: 'Deposit',
      amount: 0.5,
      date: '2024-09-01',
      status: 'Completed',
    },
    {
      id: 2,
      crypto: 'Ethereum',
      symbol: 'ETH',
      type: 'Withdrawal',
      amount: 2,
      date: '2024-09-05',
      status: 'Pending',
    },
    // Add more mock transactions as needed
  ]);

  const [showAddWalletModal, setShowAddWalletModal] = useState(false);
  const [newWalletCrypto, setNewWalletCrypto] = useState(CRYPTOCURRENCIES[0].symbol);
  const [newWalletAddress, setNewWalletAddress] = useState('');

  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [selectedWithdrawWallet, setSelectedWithdrawWallet] = useState(null);
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const [showFundModal, setShowFundModal] = useState(false);
  const [selectedFundWallet, setSelectedFundWallet] = useState(null);
  const [fundAmount, setFundAmount] = useState('');

  const [showCompliance, setShowCompliance] = useState(false);
  const [kycVerified, setKycVerified] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  // Total Account Balance
  const totalBalance = wallets.reduce((acc, wallet) => acc + wallet.balance, 0);

  // Notifications
  const notify = (message, type = 'success') => {
    if (type === 'success') {
      toast.success(message, { position: toast.POSITION.TOP_RIGHT });
    } else if (type === 'error') {
      toast.error(message, { position: toast.POSITION.TOP_RIGHT });
    } else {
      toast.info(message, { position: toast.POSITION.TOP_RIGHT });
    }
  };

  // Handlers
  const handleAddWallet = (e) => {
    e.preventDefault();
    if (!newWalletAddress.trim()) {
      notify('Wallet address cannot be empty', 'error');
      return;
    }
    const newId = wallets.length + 1;
    const crypto = CRYPTOCURRENCIES.find((c) => c.symbol === newWalletCrypto);
    setWallets([
      ...wallets,
      {
        id: newId,
        crypto: crypto.name,
        symbol: crypto.symbol,
        address: newWalletAddress,
        balance: 0,
        status: 'Active',
      },
    ]);
    notify('Wallet added successfully');
    setNewWalletAddress('');
    setShowAddWalletModal(false);
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      notify('Please enter a valid amount', 'error');
      return;
    }
    const wallet = wallets.find((w) => w.id === selectedWithdrawWallet.id);
    if (wallet.balance < amount) {
      notify('Insufficient balance', 'error');
      return;
    }

    // Update wallet balance
    setWallets(
      wallets.map((w) =>
        w.id === wallet.id ? { ...w, balance: w.balance - amount } : w
      )
    );

    // Add transaction
    const newTransaction = {
      id: transactions.length + 1,
      crypto: wallet.crypto,
      symbol: wallet.symbol,
      type: 'Withdrawal',
      amount: amount,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending',
    };
    setTransactions([...transactions, newTransaction]);

    notify('Withdrawal request submitted');
    setWithdrawAmount('');
    setSelectedWithdrawWallet(null);
    setShowWithdrawModal(false);
  };

  const handleFund = (e) => {
    e.preventDefault();
    const amount = parseFloat(fundAmount);
    if (isNaN(amount) || amount <= 0) {
      notify('Please enter a valid amount', 'error');
      return;
    }
    const wallet = wallets.find((w) => w.id === selectedFundWallet.id);

    // Update wallet balance
    setWallets(
      wallets.map((w) =>
        w.id === wallet.id ? { ...w, balance: w.balance + amount } : w
      )
    );

    // Add transaction
    const newTransaction = {
      id: transactions.length + 1,
      crypto: wallet.crypto,
      symbol: wallet.symbol,
      type: 'Deposit',
      amount: amount,
      date: new Date().toISOString().split('T')[0],
      status: 'Completed',
    };
    setTransactions([...transactions, newTransaction]);

    notify('Wallet funded successfully');
    setFundAmount('');
    setSelectedFundWallet(null);
    setShowFundModal(false);
  };

  const handleDeleteWallet = (id) => {
    if (window.confirm('Are you sure you want to delete this wallet?')) {
      setWallets(wallets.filter((wallet) => wallet.id !== id));
      notify('Wallet deleted successfully', 'info');
    }
  };

  const handleEditWallet = (wallet) => {
    const newAddress = prompt('Enter new wallet address:', wallet.address);
    if (newAddress && newAddress.trim()) {
      setWallets(
        wallets.map((w) =>
          w.id === wallet.id ? { ...w, address: newAddress } : w
        )
      );
      notify('Wallet address updated', 'success');
    }
  };

  // Simulate fetching exchange rates (In real app, fetch from API)
  const [exchangeRates, setExchangeRates] = useState({
    BTC: 50000,
    ETH: 4000,
    LTC: 200,
    USDT: 1,
  });

  useEffect(() => {
    // Simulate fetching exchange rates
    const fetchExchangeRates = () => {
      // This should be replaced with real API calls
      setExchangeRates({
        BTC: 50000,
        ETH: 4000,
        LTC: 200,
        USDT: 1,
      });
    };
    fetchExchangeRates();
    // Optionally, set interval to update rates periodically
  }, []);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <ToastContainer />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 ">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Wallet Dashboard</h2>
        <div className="container mt-10 mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-end items-center mb-6">
           
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button
                onClick={() => setShowCompliance(!showCompliance)}
                className="flex items-center bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md shadow transition duration-200"
              >
                <FaShieldAlt className="mr-2" /> Compliance
              </button>
            </div>
          </div>

          {/* Compliance Section */}
          {showCompliance && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Compliance</h3>
              <div className="flex items-center mb-4">
                <Switch
                  checked={kycVerified}
                  onChange={setKycVerified}
                  className={`${
                    kycVerified ? 'bg-green-600' : 'bg-gray-300'
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300`}
                >
                  <span
                    className={`${
                      kycVerified ? 'translate-x-6' : 'translate-x-1'
                    } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
                  />
                </Switch>
                <span className="ml-3 text-gray-700 dark:text-gray-300">
                  {kycVerified ? 'KYC Verified' : 'KYC Not Verified'}
                </span>
              </div>
              {!kycVerified && (
                <button
                  onClick={() => notify('KYC verification process started')}
                  className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
                >
                  <FaPlus className="mr-2" /> Verify KYC
                </button>
              )}
            </div>
          )}

          {/* Total Account Balance */}
          <div className="bg-gradient-to-r from-gray-600 to-red-500 rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">Total Account Balance</h3>
            <p className="text-3xl font-bold text-white">${totalBalance.toLocaleString()}</p>
          </div>

          {/* Wallet Balance Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {wallets.map((wallet) => (
              <div
                key={wallet.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center transition-transform duration-300 hover:shadow-xl"
              >
                <div className="text-4xl mb-4 text-green-600">{CRYPTOCURRENCIES.find(c => c.symbol === wallet.symbol)?.icon}</div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                  {wallet.crypto} ({wallet.symbol})
                </h3>
                <p className="text-lg mt-2">Balance: {wallet.balance} {wallet.symbol}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">USD: ${(wallet.balance * (exchangeRates[wallet.symbol] || 0)).toLocaleString()}</p>
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => {
                      setSelectedFundWallet(wallet);
                      setShowFundModal(true);
                    }}
                    className="flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md shadow transition duration-200"
                  >
                    <FaArrowDown className="mr-1" /> Fund
                  </button>
                  <button
                    onClick={() => {
                      setSelectedWithdrawWallet(wallet);
                      setShowWithdrawModal(true);
                    }}
                    className="flex items-center bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow transition duration-200"
                  >
                    <FaArrowUp className="mr-1" /> Withdraw
                  </button>
                </div>
                {/* <div className="mt-2 flex space-x-2">
                  <button
                    onClick={() => handleEditWallet(wallet)}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteWallet(wallet.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <FaTrash />
                  </button>
                </div> */}
              </div>
            ))}
          </div>

          {/* Add Wallet Section */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setShowAddWalletModal(true)}
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-200"
            >
              <FaPlus className="mr-2" /> Add Wallet
            </button>
          </div>

          {/* Wallet Addresses */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Wallet Addresses</h3>
            <ul className="space-y-4">
              {wallets.map((wallet) => (
                <li
                  key={wallet.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow flex justify-between items-center transition duration-200 hover:shadow-lg"
                >
                  <div>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                      {wallet.crypto} ({wallet.symbol})
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{wallet.address}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Balance: {wallet.balance} {wallet.symbol}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Status: {wallet.status}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditWallet(wallet)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteWallet(wallet.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

                    {/* Exchange Rates */}
                    <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Exchange Rates</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {CRYPTOCURRENCIES.map((crypto) => (
                <div
                  key={crypto.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center transition-transform duration-300 hover:shadow-xl"
                >
                  <div className="text-3xl mr-4">{crypto.icon}</div>
                  <div>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      {crypto.name} ({crypto.symbol})
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      1 {crypto.symbol} = ${exchangeRates[crypto.symbol]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction History */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Transaction History</h3>
              <button
                className="flex items-center bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md shadow transition duration-200"
              >
                <FaHistory className="mr-2" /> View All Transactions
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <thead>
                  <tr>
                    <th className="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Crypto
                    </th>
                    <th className="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Type
                    </th>
                    <th className="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Amount
                    </th>
                    <th className="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Date
                    </th>
                    <th className="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="border-t border-gray-200 dark:border-gray-700">
                      <td className="py-2 px-4 text-gray-700 dark:text-gray-200">
                        {tx.crypto} ({tx.symbol})
                      </td>
                      <td className="py-2 px-4 text-gray-700 dark:text-gray-200">{tx.type}</td>
                      <td className="py-2 px-4 text-gray-700 dark:text-gray-200">
                        {tx.amount} {tx.symbol}
                      </td>
                      <td className="py-2 px-4 text-gray-700 dark:text-gray-200">{tx.date}</td>
                      <td className="py-2 px-4 text-gray-700 dark:text-gray-200">{tx.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>


          {/* Add Wallet Modal */}
          {showAddWalletModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Add New Wallet</h3>
                <form onSubmit={handleAddWallet} className="space-y-4">
                  <div>
                    <label htmlFor="crypto" className="block text-gray-700 dark:text-gray-300">
                      Cryptocurrency
                    </label>
                    <select
                      id="crypto"
                      value={newWalletCrypto}
                      onChange={(e) => setNewWalletCrypto(e.target.value)}
                      required
                      className="w-full mt-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"
                    >
                      {CRYPTOCURRENCIES.map((crypto) => (
                        <option key={crypto.id} value={crypto.symbol}>
                          {crypto.name} ({crypto.symbol})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-gray-700 dark:text-gray-300">
                      Wallet Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={newWalletAddress}
                      onChange={(e) => setNewWalletAddress(e.target.value)}
                      required
                      className="w-full mt-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setShowAddWalletModal(false)}
                      className="px-4 py-2 bg-gray-500 text-white rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md"
                    >
                      Add Wallet
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Withdraw Modal */}
          {showWithdrawModal && selectedWithdrawWallet && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Withdraw Funds</h3>
                <form onSubmit={handleWithdraw} className="space-y-4">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Cryptocurrency: {selectedWithdrawWallet.crypto} ({selectedWithdrawWallet.symbol})
                    </p>
                  </div>
                  <div>
                    <label htmlFor="withdrawAmount" className="block text-gray-700 dark:text-gray-300">
                      Amount
                    </label>
                    <input
                      type="number"
                      id="withdrawAmount"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      required
                      min="0"
                      step="any"
                      className="w-full mt-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setShowWithdrawModal(false)}
                      className="px-4 py-2 bg-gray-500 text-white rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-red-600 text-white rounded-md"
                    >
                      Withdraw
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Fund Modal */}
          {showFundModal && selectedFundWallet && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Fund Wallet</h3>
                <form onSubmit={handleFund} className="space-y-4">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Cryptocurrency: {selectedFundWallet.crypto} ({selectedFundWallet.symbol})
                    </p>
                  </div>
                  <div>
                    <label htmlFor="fundAmount" className="block text-gray-700 dark:text-gray-300">
                      Amount
                    </label>
                    <input
                      type="number"
                      id="fundAmount"
                      value={fundAmount}
                      onChange={(e) => setFundAmount(e.target.value)}
                      required
                      min="0"
                      step="any"
                      className="w-full mt-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setShowFundModal(false)}
                      className="px-4 py-2 bg-gray-500 text-white rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded-md"
                    >
                      Fund
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
