const DashNavigate = () => {
   return ( 
      <>
      <section className="mr-7">
         <section className="flex gap-2 justify-end">
         <img src="/Dashboard/DropRight.svg" alt="Drop" width={24} height={12} />
            <button className="text-[12px] text-[#1B1E27] h-[30px] w-[30px] border border-[#DFE3E8] rounded-[4px] bg-[#fff] flex items-center justify-center active:border-[#1B1E27]">
               <p>1</p>
            </button>
            <button className="text-[12px] text-[#1B1E27] h-[30px] w-[30px] border border-[#DFE3E8] rounded-[4px] bg-[#fff] flex items-center justify-center">
               <p>2</p>
            </button>
            <button className="text-[12px] text-[#1B1E27] h-[30px] w-[30px] border border-[#DFE3E8] rounded-[4px] bg-[#fff] flex items-center justify-center">
               <p>...</p>
            </button>
            <button className="text-[12px] text-[#1B1E27] h-[30px] w-[30px] border border-[#DFE3E8] rounded-[4px] bg-[#fff] flex items-center justify-center">
               <p>9</p>
            </button>
            <button className="text-[12px] text-[#1B1E27] h-[30px] w-[30px] border border-[#DFE3E8] rounded-[4px] bg-[#fff] flex items-center justify-center">
               <p>10</p>
            </button>
            <button className="text-[12px] text-[#1B1E27] h-[30px] w-[30px] border border-[#DFE3E8] rounded-[4px] bg-[#fff] flex items-center justify-center">
              <img src="/Dashboard/DropLeft2.svg" alt="Drop" width={18} height={12} />
            </button>
         </section>
      </section>
      </>
    );
}
 
export default DashNavigate;