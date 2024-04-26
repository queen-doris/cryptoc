const DashAccount = () => {
   return ( 
      <>
      <section className="bg-[#23262F] h-[80px] gap-3 flex items-center justify-center">
         <section className="flex gap-3">
            <section className="flex gap-2 items-center ">
            <img src="/Dashboard/Account.svg" alt="Account" width={35} height={20} />
            <section>
               <h1 className="font-[500] text-[13px] text-[#fff]">Richard</h1>
               <h2 className="text-[12px] text-[#97A0A8]">richard@gmail.com</h2>
            </section>
            </section>
            <img src="/Dashboard/Logout.svg" alt="Logout" width={25} height={40} />
         </section>
      </section>
      </>
    );
}
 
export default DashAccount;