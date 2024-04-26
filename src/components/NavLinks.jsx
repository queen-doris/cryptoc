import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Task from '../pages/Task'

const NavLinks = () => {
   return ( 
      
<>
      <section className="mt-16">
         <section className="flex flex-col  text-[12px] text-[#8D8F93] gap-3 ml-3">
            <button className="flex gap-3 text-[#DAFB59] font-[500] items-center r  h-[40px] w-[170px] rounded-[50px] justify-center mr">
              <section className="flex gap-3 mr-2">
                <img src="/Dashboard/DashHome.svg" alt="Dashboard" width={18} height={10} />
                <h1 className="text-[#ffffff]">Dashboard</h1>
              </section>
            </button>
            <button className="flex gap-3 font-[500] h-[35px] w-[170px] bg-[#4D67F9] rounded-[50px] items-center justify-center text-[#fff]">
              <section className="flex items-center justify-center gap-3">
              <img src="/Dashboard/CheckMark.svg" alt="Opportunity" width={16} height={10} />
               <h1 className="text-[#fff]">Opportunity</h1>
              </section>
            </button>
            <button className="flex gap-3  font-[500] bg-[#1B1E27] rounded-[50px] justify-center items-center h-[40px] w-[170px]">
              <section className="flex gap-3 ml-7 mr-5">
                <img src="/Dashboard/Proposal.svg" alt="Proposal" width={18} height={10} />
                <h1>Proposal</h1>
              </section>
              <div className="bg-[#31343C] w-5 h-5 rounded-[50%] items-center justify-center ">
               5
              </div>
            </button>
            <button className="flex gap-3  font-[500] items-center  h-[40px] w-[170px] rounded-[50px] justify-center">
              <section className="flex ml-7 gap-3 mr-7">
                <img src="/Dashboard/Project.svg" alt="Project" width={18} height={10} />
                <h1>Project</h1>
              </section>
              <div className="bg-[#31343C] w-5 h-5 rounded-[50%] items-center justify-center">
               5
              </div>
            </button>
            <button to="/Task" className="flex gap-3  font-[500] items-center  h-[40px] w-[170px] rounded-[50px] justify-center">
              <section className="flex gap-3 mr-12">
                <img src="/Dashboard/Task.svg" alt="Task" width={18} height={10} />
                <h1>Task</h1>
              </section>
            </button>
            <button className="flex gap-3  font-[500] items-center  h-[40px] w-[170px] rounded-[50px] justify-center">
              <section className="flex gap-3 items-center justify-center mr-2">
                <img src="/Dashboard/Doc.svg" alt="Documents" width={18} height={10} />
                <h1>Documents</h1>
              </section>
            </button>
            <section className="ml-2" >
               <img src="/Dashboard/Bar.svg" alt="Bar line" width={170} height={12} />
            </section>
            <button className="flex gap-3  font-[500]   h-[40px] w-[170px] rounded-[50px] justify-center">
              <section className="flex gap-3 mr-5">
                <img src="/Dashboard/Expenses.svg" alt="Expenses" width={18} height={10} />
                <h1>Expenses</h1>
              </section>
            </button>
            <button className="flex gap-3  font-[500]   h-[40px] w-[170px] rounded-[50px] justify-center">
              <section className="flex gap-3 mr-5">
                <img src="/Dashboard/Settings1.svg" alt="Settings" width={18} height={10} />
                <h1>Settings</h1>
              </section>
            </button>
         </section>
         {/* <Routes>
           <Route path="/Task" element={<Task />} />
        </Routes> */}
      </section>

      </>
    );
}
 
export default NavLinks;


// import React from 'react';
// import { NavLink } from 'react-router-dom';

// function NavLinks() {
//   return (
//     <section className="mt-16">
//       <section className="flex flex-col  text-[12px] text-[#8D8F93] gap-3 ml-3">
//       <nav>
//       <button className="flex gap-3 text-[#DAFB59] font-[500] items-center r  h-[40px] w-[170px] rounded-[50px] justify-center mr">
// //               <section className="flex gap-3 mr-2">
// //                 <img src="/Dashboard/DashHome.svg" alt="Dashboard" width={18} height={10} />
// //                 <h1 className="text-[#ffffff]">Dashboard</h1>
// //               </section>
// //   </button>
//       <NavLink
//         to="/"
//         className={({ isActive }) => (isActive ? "isActive ? "bg-blue-500 text-white p-2 rounded-md"bg-gray-200 text-gray-900 p-2 rounded-md" : "link")}
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/Task"
//         className={({ isActive }) => (isActive ? "link-active" : "link")}
//       >
//         Task
//       </NavLink>
//       <NavLink
//         to="/contact"
//         className={({ isActive }) => (isActive ? "link-active" : "link")}
//       >
//         Contact
//       </NavLink>
//     </nav>
//       </section>
//     </section>
//   );
// }

// export default NavLinks;
