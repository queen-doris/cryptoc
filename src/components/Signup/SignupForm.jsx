import React from 'react';
import InputField from '../Inputs/AuthInput';
import TermsCheckbox from '../Inputs/CheckField';
import { NavLink } from 'react-router-dom';

const SignupForm = () => {
  return (
    <section>
      <section className="flex items-center justify-center flex-col mb-10 mt-8">
        <h1 className="font-bold text-sm">IBC Workplace</h1>
        <section className="flex items-center justify-center flex-col mt-8">
          <h1 className="text-[#1B1E27] font-bold text-3xl mb-1">Create Your Account Now</h1>
          <p className="font-normal text-sm">Access a workspace and work swiftly with your team members</p>
        </section>
      </section>
      <section className='flex flex-col items-center'>
      <section>
      <InputField iconPath="/Signup/User.svg" placeHolder="Name" />
      <InputField iconPath="/Signup/Email.svg" placeHolder="Email Address" inputType="email" />
      <InputField iconPath="/Signup/Pword.svg" placeHolder="Password" inputType="password" />
      <TermsCheckbox check="I agree to the terms and conditions" />
      </section>
      </section>
      <section className='flex items-center justify-center mt-10'>
         <button className='bg-[#1B1E27] h-[45px] w-[200px] rounded-[12px]' type='submit'>
            <h1 className='font-[700] text-[#fff] text-sm'>Sign Up</h1>
         </button>
      </section>
      <section className='flex items-center justify-center mt-16'>
         <h1 className='text-sm text-[#808080]'>Already have an account? <NavLink to="/auth/login" className="text-[#4D67F9]">Login</NavLink></h1>
      </section>
    </section>
  );
}

export default SignupForm;
