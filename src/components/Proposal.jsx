import SelectPhase from "./WithIconInputs/Select Phase";

const Proposal = () => {
  const options = ["Option 1", "Option 2", "Option 3"];
   return ( 
      <>
      <section>
         <section className="flex items-center justify-center mt-1">
            <h1 className="font-[800] text-[14px]">Add Project Phases</h1>
         </section>
         <section className="flex items-center  mt-7 flex-col">
           <section>
           <section className="flex gap-5 text-[12px] items-center justify-center mb-5">
               <section>
                  <button className="bg-[#DAFB59] rounded-[50px] w-[80px] h-[30px] text-[#1B1E27]">Opportunity</button>
               </section>
               <section>
                  <button className="bg-[#F4F5FB] rounded-[50px] w-[90px] h-[30px] text-[#B4B4BC]">Phase 2</button>
               </section>
               <section>
                  <button className="bg-[#F4F5FB] rounded-[50px] w-[90px] h-[30px] text-[#B4B4BC]">Phase 3</button>
               </section>
               <button>
                  <img src="/Proposal/AddPhase.svg" alt="Add phase" width={24} height={20} />
               </button>
               </section>
           <section className="mr-24">       
            <SelectPhase />
          </section>
           </section>
         </section>
         </section>
      </>
    );
}
 
export default Proposal;