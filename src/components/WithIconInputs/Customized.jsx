// import React, { useState } from 'react';

// const Customized = () => {
//     const [selectedItems, setSelectedItems] = useState([]);
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const availableItems = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

//     const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//     const handleSelectItem = (item) => {
//         if (!selectedItems.includes(item)) {
//             setSelectedItems([...selectedItems, item]);
//         } else {
//             setSelectedItems(selectedItems.filter(selected => selected !== item)); // Allows toggling on/off
//         }
//     };

//     const removeItem = (item, event) => {
//         event.stopPropagation(); // Prevents dropdown from toggling when removing an item
//         setSelectedItems(selectedItems.filter(selected => selected !== item));
//     };

//     return (
//         <div className="relative flex flex-col w-full">
//             <label htmlFor="checklist" className='font-bold text-sm mb-3'>Checklist Title</label>
//             <div className="relative flex items-center border border-gray-300 rounded-lg overflow-hidden p-2 mb-2 w-[240px] h-[35px]">
//                 <div className="flex-grow flex items-center gap-2 overflow-x-auto scrollbar-hide" onClick={toggleDropdown}>
//                     {selectedItems.length > 0 ? selectedItems.map(item => (
//                         <div key={item} className="flex items-center bg-[#CBD1E14D] rounded-full text-sm text-[#23262F] px-2 h-[23px]">
//                             {item}
//                             <button onClick={(e) => removeItem(item, e)} className="ml-2 text-blue-500 hover:text-blue-700">
//                                 <img src="/Dashboard/Close.svg" alt="Delete" style={{ width: '10px', height: '12px' }} />
//                             </button>
//                         </div>
//                     )) : <span className="text-gray-500">Select options...</span>}
//                 </div>
//                 <svg className="w-5 h-5 ml-2 absolute right-2 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
//                 </svg>
//             </div>
//             {dropdownOpen && (
//                 <ul className="absolute border border-gray-300 bg-white w-full rounded-lg z-10 mt-1">
//                     {availableItems.map(item => (
//                         <li key={item} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelectItem(item)}>
//                             {item}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default Customized;
import React, { useState, useRef, useEffect } from 'react';

const options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' },
    { value: 'Option 6', label: 'Option 6' }
];

const Customized = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        if (selectedOptions.includes(option.label)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option.label)); // Remove if already selected
        } else {
            setSelectedOptions([...selectedOptions, option.label]); // Add to selected items
        }
    };

    const handleRemoveItem = (item) => {
        setSelectedOptions(selectedOptions.filter(option => option !== item)); // Remove item from selections
    };

    return (
        <div ref={wrapperRef} className="flex flex-col relative w-64">
            <label htmlFor="status-input" className='font-[700] text-[12px] mb-3'>Status</label>
            <div className="relative">
                <div className="cursor-pointer placeholder:text-[#A6A3A3] h-[35px] border w-[240px] border-[#A6A3A373] border-1 rounded-[7px] pl-4 pr-10 mb-4 flex flex-wrap items-center">
                    {selectedOptions.map(item => (
                        <div key={item} className="flex items-center bg-gray-200 mr-2 mb-1 rounded px-2 py-1 text-sm">
                            {item}
                            <button onClick={() => handleRemoveItem(item)} className="ml-2 text-red-500">
                                &#10005;
                            </button>
                        </div>
                    ))}
                    <button className="ml-auto" onClick={toggleDropdown}>
                        <img src="/Task/DropDown.svg" alt="Select Phase" width={20} height={12} />
                    </button>
                </div>
            </div>
            {isOpen && (
                <ul className="absolute border border-gray-300 rounded bg-white w-full z-10 mt-1 overflow-auto max-h-40">
                    {options.map(option => (
                        <li key={option.value}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(option)}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Customized;
