import React from 'react'

const Tasks = () => {
  return (
    <div id="tasks" className="section ">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold mb-6">Tasks</h2>
        <span className="-mt-5 pr-8">
          <i className="fa fa-bell text-lg" aria-hidden="true"></i>
        </span>
      </div>
      <div className="bg-white text-center p-6 rounded-lg overflow-auto shadow-md">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Task</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Task 1</td>
              <td className="border px-4 py-2">00-00-00</td>
              <td className="border px-4 py-2">Pending</td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 text-white px-3 py-1 rounded-md">Complete</button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Task 2</td>
              <td className="border px-4 py-2">00-00-00</td>
              <td className="border px-4 py-2">Completed</td>
              <td className="border px-4 py-2">
                <button className="bg-gray-500 text-white px-3 py-1 rounded-md" disabled>
                  Completed
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Task 3</td>
              <td className="border px-4 py-2">00-00-00</td>
              <td className="border px-4 py-2">Pending</td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 text-white px-3 py-1 rounded-md">Complete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Tasks