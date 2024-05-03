import React, { useState } from 'react';

function TermsCheckbox({ check }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="mt-3">
      <div className="mb-4 text-sm">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={toggleCheckbox}
            className="checkbox-custom rounded-[4px]" // Apply custom class for styling
          />
          <p className='text-[#808080] text-xs ml-2 font-[400]'>{check}</p>
        </label>
      </div>
    </div>
  );
}

export default TermsCheckbox;
