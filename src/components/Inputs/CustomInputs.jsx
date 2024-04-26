import React from 'react';

function CustomInputs({ value, onChange, placeholder, className, label }) {
  return (
   <section className='flex flex-col'>
      <label htmlFor={label} className='font-[700] text-[12px] mb-3'>{label}</label>
       <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="placeholder:text-[#A6A3A3] h-[35px] border w-[240px] border-[##A6A3A373] border-1 rounded-[7px] p-4 mb-4"
    />
   </section>
  );
}

export default CustomInputs;
