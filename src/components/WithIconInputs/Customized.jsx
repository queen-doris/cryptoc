import React, { useState } from 'react';

const Customized = ({  }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const availableItems = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSelectItem = (item) => {
        if (!selectedItems.includes(item)) {
            setSelectedItems([...selectedItems, item]);
        }
        setDropdownOpen(false);
    };

    const removeItem = (item) => {
        setSelectedItems(selectedItems.filter(selected => selected !== item));
    };

    return (
        <div className="relative flex flex-col w-full">
            <label htmlFor="checklist" className='font-[700] text-[12px] mb-3'>Checklist Title</label>
            <div className="relative flex items-center border border-gray-300 rounded-lg overflow-hidden p-2 mb-2 w-[240px] h-[35px]">
               <div className="flex-grow flex items-center gap-2">
               {selectedItems.map(item => (
                   <div key={item} className="flex items-center bg-[#CBD1E14D] rounded-[7px] text-[12px] text-[#23262F] px-2 h-[23px]">
                       {item}
                       <button onClick={() => removeItem(item)} className="ml-2 text-blue-500 hover:text-blue-700">
                           <img src="/Dashboard/Close.svg" alt="delete" style={{ width: '10px', height: '12px' }} />
                       </button>
                   </div>
               ))}
           </div>
           {/* This button is now absolutely positioned to the right of the container */}
           <button 
               onClick={toggleDropdown} 
               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
               <img src="/Dashboard/Check.svg" alt="delete" width={20} height={20} />
           </button>
       </div>
            {dropdownOpen && (
                <ul className="absolute border border-gray-300 bg-white w-full rounded-lg z-10">
                    {availableItems.map(item => (
                        <li key={item} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelectItem(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Customized;
