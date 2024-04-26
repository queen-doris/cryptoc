const DashHeader = () => {
   return ( 
      <>
      <section className="h-[60px] bg-[#fff] grid grid-cols-2">
         <section className="flex gap-5 ml-6 ">
            <button>
              <img src="/Dashboard/SideMenu.svg" alt="Side menu" width={20} height={20} />
            </button>
            <button>
              <img src="/Dashboard/Wallet.svg" alt="Side menu" width={20} height={20} />
            </button>
            <section className="flex items-center">
            <section className="flex items-center justify-center ">
               <div className="w-[45px] h-[30px] flex items-center bg-[#F8F8F9] pl-5 rounded-tl-[30px] rounded-bl-[30px]">
                  <button >
                     <img src="/Dashboard/Search.svg" alt="Search" width={15} height={20} />
                  </button>
               </div>
               <input 
                     type="text"  
                     placeholder="Type any cryptocurrency..."
                     name="search"
                     className="font-[400] placeholder:text-[#a5a5a7] w-[280px] h-[30px] bg-[#F8F9FB] focus:border-transparent focus:outline-none text-[12px] rounded-tr-[30px] rounded-br-[30px] pl-3"
               />
            </section>
         </section>
         </section>
         <section className="flex gap-7 justify-end mr-6">
            <button className="flex items-center">
              <img src="/Dashboard/Settings.svg" alt="Side menu" width={20} height={20} />
            </button>
            <section className="flex items-center justify-center mt-4">
            <button className="absolute"> 
              <img src="/Dashboard/Notif.svg" alt="Side menu" width={20} height={20} />
             <section className="relative">
             <div className="bg-[#F56C89] w-4 h-4 rounded-[50%] items-center justify-center relative  -top-7 left-2 text-[10px] text-white flex">
                 5
              </div>
             </section>
            </button>
            </section>
            <button className="flex items-center">
              <img src="/Dashboard/Profile.svg" alt="Side menu" width={20} height={20} />
            </button>
         </section>
      </section>
      </>
    );
}
 
export default DashHeader;