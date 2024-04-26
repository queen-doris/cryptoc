import DashAccount from "./DashAccount";
import Navlinks from "./NavLinks";

const DashSidebar = () => {
   return ( 
      <>
      <section className="bg-[#1B1E27] height grid grid-rows-2">
         <section className="flex">
            <Navlinks />
         </section>
         <section className="bottom">
            <DashAccount />
         </section>
      </section>
      </>
    );
}
 
export default DashSidebar;