import React, { useState, useEffect } from "react";

const InputField = ({ iconPath, placeholder,  inputType, placeHolder , value , onChange , errorMessage }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isEdge, setIsEdge] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    const isEdgeBrowser = /Edge\//.test(navigator.userAgent);
    setIsEdge(isEdgeBrowser);
  }, []);

  return (
    <section className="auth-button flex flex-col gap-1 w-[350px]">
      <div className="relative">
      <img src={iconPath} alt={placeholder} width={18} height={20} className="absolute left-0 top-2" />
        <input
          type={inputType === "password" && !isEdge ? (showPassword ? "text" : "password") : inputType}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          className="w-full pl-7 pr-4 py-2 border-b-[1.2px] text-xs items-center border-[#808080] outline-none bg-transparent placeholder:text-[#808080] placeholder:text-xs mb-6" 
        />
        {inputType === "password" && !isEdge && (
          <div
            className="absolute top-[19px] right-2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <img src="/Signup/HidePword.svg" alt="Show password" width={13} height={20} /> : <img src="/Signup/ShowPword.svg" alt="Show password" width={13} height={20} />}
          </div>
        )}
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1 ml-1">
          {errorMessage}
        </p>
      )}
    </section>
  );
};

export default InputField;