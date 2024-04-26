import DashContent from "../components/DashContent";
import DashNavigate from "../components/DashNavigate";
import DashSidebar from "../components/DashSidebar";

const Dashboard = () => {
   return ( 
      <>
      <section className="flex">
         <section className="w-[20%]">
           <DashSidebar />
         </section>
         <section className="bg-[#F1F3F9] width">
            <DashContent />
            <DashNavigate />
         </section>
      </section>
      </>
    );
}
 
export default Dashboard;