// const DashData = () => {
//    return ( 
//       <>
//       <section>
//          <section className="text-[12px] font-[700] h-[60px]  flex  items-center justify-center ml-6 mr-6 gap-[87px]">
//             <section className="">
//                <h1 className="text-[#23262F66]">Project ID</h1>
//             </section>
//             <section>
//                <h1 className="text-[#23262F66]">Opportunity</h1>
//             </section>
//             <section>
//                <h1 className="text-[#23262F66]">Deadline</h1>
//             </section>
//             <section>
//                <h1 className="text-[#23262F66]">Total Win Percentage</h1>
//             </section>
//             <section>
//                <h1 className="text-[#23262F66]">Status</h1>
//             </section>
//             <section>
//                <h1 className="text-[#23262F66]">Decision</h1>
//             </section>
//             <section>
//                <h1 className="text-[#23262F66]">Actions</h1>
//             </section>
//          </section>
//          <section className="text-[12px] font-[700] h-[60px] bg-[#fff] flex items-center justify-center ml-6 mr-6 gap-20 rounded-[20px] mb-3">
//             <section className="">
//                <h1 className="text-[#23262F66]">Project ID</h1>
//             </section>
//             <section>
//                <h1 className="text-[#23262F66]">Opportunity</h1>
//             </section>
//             <section>
//                <h1 className="text-[#23262F66]">Deadline</h1>
//             </section>
//             <section>
//                <h1 className="text-[#23262F66]">Total Win Percentage</h1>
//             </section>
//             <section>
//               <button className="bg-[#FEF5D3] h-[30px] w-[70px] rounded-[24px] text-[#FACD23]">Urgent</button>
//             </section>
//             <section>
//             <button className="bg-[#C3D0FE] h-[30px] w-[70px] rounded-[24px] text-[#3C5DD2]">Approved</button>
//             </section>
//             <section>
//                <img src="/Dashboard/ActionMenu.svg" alt="Menu" width={30} height={12} />
//             </section>
//          </section>
//          <section className="text-[12px] font-[700] h-[60px] bg-[#fff] grid grid-cols-7 items-center justify-center ml-6 mr-6 gap-[84px] mb-3 rounded-[20px]">
//             <section className="">
//                <h1 className="text-[#23262F66]">Project ID</h1>
//             </section>
//             <section>
//                <h1 className="text-[#23262F66]">Opportunity</h1>
//             </section>
//             <section>
//                <h1 className="text-[#23262F66]">Deadline</h1>
//             </section>
//             <section>
//                <h1 className="text-[#23262F66]">Total Win Percentage</h1>
//             </section>
//             <section>
//               <button className="bg-[#D9FFDF] h-[30px] w-[70px] rounded-[24px] text-[#3CD278]">Normal</button>
//             </section>
//             <section>
//             <button className="bg-[] h-[30px] w#FEF5D3-[70px] rounded-[24px] text-[#FACD23]">Pending</button>
//             </section>
//             <section>
//                <img src="/Dashboard/ActionMenu.svg" alt="Menu" width={30} height={12} />
//             </section>
//          </section>
//          <section className="text-[12px] font-[700] h-[60px] bg-[#fff] grid grid-cols-7 items-center justify-center ml-6 mr-6 gap-20 mb-3 rounded-[20px]">
//             <section className="">
//                <h1 className="text-[#23262F66]">Project ID</h1>
//             </section>
//             <section>
//                <h1 className="text-[#23262F66]">Opportunity</h1>
//             </section>
//             <section>
//                <h1 className="text-[#23262F66]">Deadline</h1>
//             </section>
//             <section>
//                <h1 className="text-[#23262F66]">Total Win Percentage</h1>
//             </section>
//             <section>
//                <button className="bg-[#FDECEC] h-[30px] w-[70px] rounded-[24px] text-[#EE4040]">Past due</button>
//             </section>
//             <section>
//             <button className="bg-[#FDECEC] h-[30px] w-[70px] rounded-[24px] text-[#EE4040]">Cancelled</button>
//             </section>
//             <section>
//                <img src="/Dashboard/ActionMenu.svg" alt="Menu" width={30} height={12} />
//             </section>
//          </section>
//       </section>
//       </>
//     );
// }
 
// export default DashData;


import React from 'react';

const DashData = () => {
  return (
    <>
      <section className="px-6 py-3">
        {/* Header Section with Titles */}
        <div className="grid grid-cols-7 gap-4 items-cent text-xs font-bold text-[#23262F66]  py-3 px-4 rounded-lg mb-3">
          <h1>Project ID</h1>
          <h1>Opportunity</h1>
          <h1>Deadline</h1>
          <h1>Total Win Percentage</h1>
          <h1>Status</h1>
          <h1>Decision</h1>
          <h1>Actions</h1>
        </div>

        {/* Data Row Example 1 */}
        <div className="grid grid-cols-7 gap-4 items-center bg-white text-xs font-bold text-[#23262F66] py-3 px-4 rounded-2xl shadow mb-3">
        <h1>Project ID</h1>
          <h1>Opportunity</h1>
          <h1>Deadline</h1>
          <h1>Total Win Percentage</h1>
          <button className="bg-yellow-200 text-yellow-700 h-8 w-20 rounded-full text-xs">Urgent</button>
          <button className="bg-blue-200 text-blue-700 h-8 w-20 rounded-full text-xs">Approved</button>
          <img src="/Dashboard/ActionMenu.svg" alt="Menu" className="h-5 w-5" />
        </div>

        {/* Data Row Example 2 */}
        <div className="grid grid-cols-7 gap-4 items-center bg-white text-xs font-bold text-[#23262F66]  py-3 px-4 rounded-2xl shadow mb-3">
        <h1>Project ID</h1>
          <h1>Opportunity</h1>
          <h1>Deadline</h1>
          <h1>Total Win Percentage</h1>
          <button className="bg-green-200 text-green-700 h-8 w-20 rounded-full text-xs">Normal</button>
          <button className="bg-red-200 text-red-700 h-8 w-20 rounded-full text-xs">Pending</button>
          <img src="/Dashboard/ActionMenu.svg" alt="Menu" className="h-5 w-5" />
        </div>

        <div className="grid grid-cols-7 gap-4 items-center bg-white text-xs font-bold text-[#23262F66]  py-3 px-4 rounded-2xl shadow mb-3">
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
