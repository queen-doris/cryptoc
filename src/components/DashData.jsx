import React from 'react';

const DashData = () => {
  return (
    <>
      <section className="px-6 py-3">
        {/* Header Section with Titles */}
        <div className="grid grid-cols-7 gap-6 items-cent text-xs font-bold text-[#23262F66]  py-3 px-4 rounded-lg mb-3">
          <h1>Project ID</h1>
          <h1>Opportunity</h1>
          <h1>Deadline</h1>
          <h1>Total Win Percentage</h1>
          <h1>Status</h1>
          <h1>Decision</h1>
          <h1>Actions</h1>
        </div>

        {/* Data Row Example 1 */}
        <div className="grid grid-cols-7 gap-6 items-center bg-white text-xs font-bold text-[#23262F66] py-3 px-4 rounded-2xl shadow mb-3">
        <h1>Project ID</h1>
          <h1>Opportunity</h1>
          <h1>Deadline</h1>
          <h1>Total Win Percentage</h1>
          <button className="bg-yellow-200 text-yellow-700 h-8 w-20 rounded-full text-xs">Urgent</button>
          <button className="bg-blue-200 text-blue-700 h-8 w-20 rounded-full text-xs">Approved</button>
          <img src="/Dashboard/ActionMenu.svg" alt="Menu" className="h-5 w-5" />
        </div>

        {/* Data Row Example 2 */}
        <div className="grid grid-cols-7 gap-6 items-center bg-white text-xs font-bold text-[#23262F66]  py-3 px-4 rounded-2xl shadow mb-3">
        <h1>Project ID</h1>
          <h1>Opportunity</h1>
          <h1>Deadline</h1>
          <h1>Total Win Percentage</h1>
          <button className="bg-green-200 text-green-700 h-8 w-20 rounded-full text-xs">Normal</button>
          <button className="bg-red-200 text-red-700 h-8 w-20 rounded-full text-xs">Pending</button>
          <img src="/Dashboard/ActionMenu.svg" alt="Menu" className="h-5 w-5" />
        </div>

        <div className="grid grid-cols-7 gap-6 items-center bg-white text-xs font-bold text-[#23262F66]  py-3 px-4 rounded-2xl shadow mb-3">
        <h1>Project ID</h1>
          <h1>Opportunity</h1>
          <h1>Deadline</h1>
          <h1>Total Win Percentage</h1>
          <button className="bg-red-200 text-[#EE4040] h-8 w-20 rounded-full text-xs">Post due</button>
          <button className="bg-red-200 text-[#EE4040] h-8 w-20 rounded-full text-xs">Cancelled</button>
          <img src="/Dashboard/ActionMenu.svg" alt="Menu" className="h-5 w-5" />
        </div>
      </section>
    </>
  );
}

export default DashData;
