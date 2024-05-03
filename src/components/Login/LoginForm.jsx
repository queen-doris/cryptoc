import React from 'react';
import InputField from '../Inputs/AuthInput';
import TermsCheckbox from '../Inputs/CheckField';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  return (
    <section>
      <section className="flex items-center justify-center flex-col mb-10 mt-8">
        <h1 className="font-bold text-sm">IBC Workplace</h1>
        <section className="flex items-center justify-center flex-col mt-8">
          <h1 className="text-[#1B1E27] font-bold text-3xl mb-1">Welcome Back</h1>
          <p className="font-normal text-sm">Login to your workplace and get your work done effectively.</p>
        </section>
      </section>
      <section className='flex flex-col items-center'>
      <section>
      <InputField iconPath="/Signup/Email.svg" placeHolder="Email Address" />
      <InputField iconPath="/Signup/Pword.svg" placeHolder="Password" inputType="password" />
      <TermsCheckbox check="Remember me" />
      </section>
      </section>
      <section className='flex items-center justify-center mt-10'>
         <button className='bg-[#1B1E27] h-[45px] w-[200px] rounded-[12px]' type='submit'>
            <h1  className='font-[700] text-[#fff] text-sm'>Login</h1>
         </button>
      </section>
      <section className='flex items-center justify-center mt-16'>
         <h1 className='text-sm text-[#808080]'>Don't have an account? <NavLink to="/" className="text-[#4D67F9]">Sign Up</NavLink></h1>
      </section>
    </section>
  );
}

export default LoginForm;
