import React from 'react';
import { FaTasks, FaClock, FaCheckCircle, FaHistory } from 'react-icons/fa';

const Tasks = () => {
  // Mock data for demonstration purposes
  const totalTasks = 25;
  const pendingTasks = 10;
  const completedTasks = 15;

  const todaysTasks = [
    { id: 1, name: 'Task 1', date: '2024-04-27', status: 'Pending' },
    { id: 2, name: 'Task 2', date: '2024-04-27', status: 'Completed' },
    { id: 3, name: 'Task 3', date: '2024-04-27', status: 'Pending' },
    // Add more tasks as needed
  ];

  const taskHistory = [
    { id: 1, name: 'Task A', date: '2024-04-20', status: 'Completed' },
    { id: 2, name: 'Task B', date: '2024-04-21', status: 'Completed' },
    { id: 3, name: 'Task C', date: '2024-04-22', status: 'Pending' },
    // Add more history records as needed
  ];

  return (
    <div id="tasks" className="section md:pt-6 pt-4 min-h-screen">
      {/* Header Section */}
      <div className="flex space-x-6 items-center mb-6">
        <h2 className="text-3xl font-bold md:pl-0 pl-4 text-gray-800">Tasks</h2>
        <button
          className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
          aria-label="Notifications"
        >
          <FaClock className="text-2xl" />
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {/* Total Allocated Tasks Card */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
          <div className="p-3 bg-blue-500 rounded-full text-white">
            <FaTasks className="text-3xl" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">Total Allocated Tasks</p>
            <p className="text-2xl font-semibold text-gray-800">{totalTasks}</p>
          </div>
        </div>

        {/* Pending Tasks Card */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
          <div className="p-3 bg-yellow-500 rounded-full text-white">
            <FaClock className="text-3xl" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">Pending Tasks</p>
            <p className="text-2xl font-semibold text-gray-800">{pendingTasks}</p>
          </div>
        </div>

        {/* Completed Tasks Card */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
          <div className="p-3 bg-green-500 rounded-full text-white">
            <FaCheckCircle className="text-3xl" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">Completed Tasks</p>
            <p className="text-2xl font-semibold text-gray-800">{completedTasks}</p>
          </div>
        </div>
      </div>

      {/* Today's Assigned Tasks Section */}
      <div className="bg-white md:p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-semibold md:pl-0 pl-2 text-gray-800 mb-4">Today's Assigned Tasks</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                <th className="px-6 py-3 text-left">Task</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {todaysTasks.map((task) => (
                <tr key={task.id} className="border-b">
                  <td className="px-6 py-4">{task.name}</td>
                  <td className="px-6 py-4">{task.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        task.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {task.status === 'Pending' ? (
                      <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200">
                        Complete
                      </button>
                    ) : (
                      <button
                        className="bg-gray-400 text-white px-4 py-2 rounded-md cursor-not-allowed"
                        disabled
                      >
                        Completed
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Task History Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaHistory className="mr-2 text-xl" /> Task History
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                <th className="px-6 py-3 text-left">Task</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {taskHistory.map((task) => (
                <tr key={task.id} className="border-b">
                  <td className="px-6 py-4">{task.name}</td>
                  <td className="px-6 py-4">{task.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        task.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
              {/* Add more history records as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
