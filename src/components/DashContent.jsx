import React, { useState } from "react";
import DashData from "./DashData";
import DashHeader from "./DashHeader";
import NewOpportunityModel from "../Models/NewOpportunity";
import NewOpportunity from "./NewOpportunity";

const DashContent = () => {
   const [isModalOpen, setModalOpen] = useState(false);
   const openModal = () => setModalOpen(true);
   const closeModal = () => setModalOpen(false);
   return ( 
      <>
      <section>
         <section>
            <DashHeader />
         </section>
         <section className="h-[100px] ml-14 mb-14">
            <section className="h-[30px]"></section>
            <section className="flex flex-col gap-1">
               <h1 className="text-[#1B1E27CC] font-[700]">Opportunities</h1>
               <section className="flex gap-2">
                  <p className="text-[12px] font-[400] text-[#B2BABA]">Opportunity</p>
                  <button>
                    <img src="/Dashboard/DropLeft.svg" alt="Drop" width={12} height={12} />
                  </button>
                  <p className="text-[12px] text-[#1F384C] font-[400]">Dashboard</p>
               </section>
            </section>
            <section className="text-[12px] font-[400] flex items-center justify-end mr-10 mt-5">
               <section className="flex gap-7">
                  <button className="flex items-center justify-center h-[30px] w-[120px] gap-7 p-1 rounded-[50px] bg-[#fff]  text-[#23262F]">
                     <p>Sort by</p>
                     <img src="/Dashboard/SortBy.svg" alt="Sort by" width={12} height={14} />
                  </button>
                  <button className="flex items-center justify-center h-[30px] w-[120px] gap-7 p-1 rounded-[50px] bg-[#fff]  text-[#23262F]">
                     <p>Filter</p>
                     <img src="/Dashboard/SortBy.svg" alt="Sort by" width={12} height={14} />
                  </button>
                  <button className="flex items-center justify-center h-[30px] w-[140px] gap-7 p-1 rounded-[50px] bg-[#fff]  text-[#23262F]">
                     <img src="/Dashboard/Export.svg" alt="Sort by" width={12} height={14} />
                     <p>Export</p>
                  </button>
                  <button onClick={openModal} className="flex items-center justify-center h-[30px] w-[165px] gap-7 p-1 rounded-[50px] bg-[#DAFB59]  text-[#23262F]">
                     <img src="/Dashboard/NewOpp.svg" alt="Sort by" width={12} height={14} />
                     <p>New opportunity</p>
                  </button>
                  <NewOpportunityModel isOpen={isModalOpen} onClose={closeModal}>
                     <NewOpportunity />
                  </NewOpportunityModel>
               </section>
            </section>
         </section>
         <section>
            <DashData />
         </section>
      </section>
      </>
    );
}
 
export default DashContent;