import React from "react";
import { NavLink } from 'react-router-dom';

function NavLinks() {
  return (
    <>
      <section className="mt-16">
        <section className="flex flex-col text-[12px] text-[#8D8F93] gap-3 ml-3">
          {/* NavLink for Dashboard */}
          <NavLink
            to="/" // Assuming this links to the home/dashboard page
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 font-[500] h-[35px] w-[170px] bg-[#4D67F9] rounded-[50px] items-center justify-center text-[#fff]"
                : "flex gap-3 text-[#DAFB59] font-[500] items-center h-[40px] w-[170px] rounded-[50px] justify-center"
            }
          >
            <section className="flex gap-3 ml-3 mr-5">
            <img src="/Dashboard/DashHome.svg" alt="Dashboard" width={18} height={10} />
            <h1 >Dashboard</h1>
            </section>
          </NavLink>

          {/* NavLink for Opportunity */}
          <NavLink
            to="/opportunity" // Update this path to match your routing configuration
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 font-[500] h-[35px] w-[170px] bg-[#4D67F9] rounded-[50px] items-center justify-center text-[#fff] "
                : "flex gap-3  font-[500] bg-[#1B1E27] rounded-[50px] justify-center items-center h-[40px] w-[170px]"
            }
          >
            <section className="flex gap-3">
            <img src="/Dashboard/CheckMark.svg" alt="Opportunity" width={16} height={10} />
            <h1>Opportunity</h1>
            </section>
          </NavLink>
          <NavLink
            to="/proposal" // Update this path to match your routing configuration
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 font-[500] h-[35px] w-[170px] bg-[#4D67F9] rounded-[50px] items-center justify-center text-[#fff]"
                : "flex gap-3  font-[500] bg-[#1B1E27] rounded-[50px] justify-center items-center h-[40px] w-[170px]"
            }
          >
            <section className="flex gap-3 ml-7 mr-5">
                 <img src="/Dashboard/Proposal.svg" alt="Proposal" width={18} height={10} />
                 <h1>Proposal</h1>
               </section>
               <div className="bg-[#31343C] w-5 h-5 rounded-[50%] items-center justify-center flex">
                5
               </div>
          </NavLink>
          <NavLink
            to="/project" // Update this path to match your routing configuration
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 font-[500] h-[35px] w-[170px] bg-[#4D67F9] rounded-[50px] items-center justify-center text-[#fff]"
                : "flex gap-3  font-[500] bg-[#1B1E27] rounded-[50px] justify-center items-center h-[40px] w-[170px]"
            }
          >
            <section className="flex ml-7 gap-3 mr-7">
                <img src="/Dashboard/Project.svg" alt="Project" width={18} height={10} />                
                 <h1>Project</h1>
              </section>              
               <div className="bg-[#31343C] w-5 h-5 rounded-[50%] items-center justify-center flex">
                5
              </div>
          </NavLink>
          <NavLink
            to="/task" // Update this path to match your routing configuration
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 font-[500] h-[35px] w-[170px] bg-[#4D67F9] rounded-[50px] items-center justify-center text-[#fff]"
                : "flex gap-3  font-[500] bg-[#1B1E27] rounded-[50px] justify-center items-center h-[40px] w-[170px]"
            }
          >
            <section className="flex gap-3 mr-12">
                <img src="/Dashboard/Task.svg" alt="Task" width={18} height={10} />
                <h1>Task</h1>
          </section>
          </NavLink>
          <NavLink
            to="/documents" // Update this path to match your routing configuration
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 font-[500] h-[35px] w-[170px] bg-[#4D67F9] rounded-[50px] items-center justify-center text-[#fff]"
                : "flex gap-3  font-[500] bg-[#1B1E27] rounded-[50px] justify-center items-center h-[40px] w-[170px]"
            }
          >
           <section className="flex gap-3 items-center justify-center mr-2">
                 <img src="/Dashboard/Doc.svg" alt="Documents" width={18} height={10} />
                 <h1>Documents</h1>
               </section>
          </NavLink>
          <section className="ml-2" >
               <img src="/Dashboard/Bar.svg" alt="Bar line" width={170} height={12} />
             </section>
             <NavLink
            to="/expesnses" // Update this path to match your routing configuration
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 font-[500] h-[35px] w-[170px] bg-[#4D67F9] rounded-[50px] items-center justify-center text-[#fff]"
                : "flex gap-3  font-[500] bg-[#1B1E27] rounded-[50px] justify-center items-center h-[40px] w-[170px]"
            }
          >
          <section className="flex gap-3 mr-5">
                 <img src="/Dashboard/Expenses.svg" alt="Expenses" width={18} height={10} />
                 <h1>Expenses</h1>
               </section>
          </NavLink>
          <NavLink
            to="/expesnses" // Update this path to match your routing configuration
            className={({ isActive }) =>
              isActive
                ? "flex gap-3 font-[500] h-[35px] w-[170px] bg-[#4D67F9] rounded-[50px] items-center justify-center text-[#fff]"
                : "flex gap-3  font-[500] bg-[#1B1E27] rounded-[50px] justify-center items-center h-[40px] w-[170px]"
            }
          >
          <section className="flex gap-3 mr-5">
                <img src="/Dashboard/Settings1.svg" alt="Settings" width={18} height={10} />
                <h1>Settings</h1>
               </section>
          </NavLink>

        </section>
      </section>
    </>
  );
}

export default NavLinks;
