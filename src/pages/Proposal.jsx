import DashNavigate from "../components/DashNavigate";
import DashSidebar from "../components/DashSidebar";
import ProposalContent from "../components/ProposalContent";

const Task = () => {
   return ( 
      <>
      <section className="flex">
         <section className="w-[20%]">
           <DashSidebar />
         </section>
         <section className="bg-[#F1F3F9] width">
            <ProposalContent />
            <section className="mr-3 mt-2">
            <DashNavigate />
            </section>
         </section>
      </section>
      </>
    );
}
 
export default Task;