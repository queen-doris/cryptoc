import Customized from "./WithIconInputs/Customized";
import Percentage from "./WithIconInputs/Percentage";
import Status from "./WithIconInputs/Status";

const NewCheckList = () => {
  const options = ["Option 1", "Option 2", "Option 3"];
   return ( 
      <>
      <section>
         <section className="flex items-center justify-center mt-1">
            <h1 className="font-[800] text-[14px]">New Checklist</h1>
         </section>
         <section className="flex items-center justify-center mt-7 flex-col">
         <section className="">       
            <Customized />
            <Percentage />
            <Status />
          </section>
   <section className="flex items-center justify-center mt-5">
   <button className="flex items-center justify-center h-[30px] w-[165px] gap-7 p-1 rounded-[50px] bg-[#DAFB59]  text-[#23262F]">
                     <p>Add Checklist</p>
                  </button>
   </section>
         </section>
         </section>
      </>
    );
}
 
export default NewCheckList;