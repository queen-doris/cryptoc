import DocumentUploader from "./DocumentUploader";
import CustomInputs from "./Inputs/CustomInputs";

const NewOpportunity = () => {
   return ( 
      <>
      <section>
         <section className="flex items-center justify-center mt-5">
            <h1 className="font-[800] text-[14px]">New Opportunity</h1>
         </section>
         <section className="flex items-center justify-center mt-10">
         <section className="">
            <CustomInputs
               label="Project Name"
               type="text"
               placeholder="Project Name"
             />
             <section className="flex flex-col">
             <section className="gap-4 flex flex-row">
             <CustomInputs
               label="Client"
               type="text"
               placeholder="Client"
               className=""
             />
             <CustomInputs
               label="Deadline"
               type="text"
               placeholder="Deadline"
             />
             </section>
             <section className="gap-4 flex flex-row">
             <CustomInputs
               label="Feedback Deadline"
               type="date"
               placeholder="Feedback Deadline"
               className="placeholder:text-[#A6A3A3]"
             />
             <CustomInputs
               label="Project Name"
               type="text"
               placeholder="Project Name"
               className="placeholder:text-[#A6A3A3] w-[100%]"
             />
             </section>
             {/* <DateInputWithIcon /> */}
             </section>
             <section className='flex flex-col'>
      <h1 className='font-[700] text-[12px] mb-3'>Description</h1>
       <input
      type="text"
      placeholder="Project Description"
      className="placeholder:text-[#A6A3A3] h-[35px] border w-[100%] border-[##A6A3A373] border-1 rounded-[7px] p-4 mb-4"
    />
   </section>
   <section>
      <DocumentUploader />
   </section>
   <section className="flex items-center justify-center mt-5">
   <button className="flex items-center justify-center h-[30px] w-[165px] gap-7 p-1 rounded-[50px] bg-[#DAFB59]  text-[#23262F]">
                     <p>Add Opportunity</p>
                  </button>
   </section>
         </section>
         </section>
      </section>
      </>
    );
}
 
export default NewOpportunity;