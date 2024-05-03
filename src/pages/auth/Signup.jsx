import BMS from "../../components/Signup/BMS";
import OwnSpace from "../../components/Signup/OwnSpace";
import SignupForm from "../../components/Signup/SignupForm";

const Login = () => {
    return (  
        <>
       <section className="flex flex-row bg-[#EFF6FE] height">
        <section className="w-[45%]">
            <OwnSpace />
        </section>
        <section className="w-[10%]">
            <BMS />
        </section>
        <section className="w-[45%]">
            <SignupForm />
        </section>
       </section>
        </>
    );
}
 
export default Login;