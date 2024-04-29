// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const Status = () => {
    

//     // Custom Input with a placeholder and showing the date when selected
//     const CustomInput = () => (
//          <section className='flex flex-col'>
//          <label htmlFor="label" className='font-[700] text-[12px] mb-3'>Status</label>
//           <input
//          type="text"
//          placeholder="Status" // Static placeholder
//          className="placeholder:text-[#A6A3A3] h-[35px] border w-[240px] border-[##A6A3A373] border-1 rounded-[7px] p-4 mb-4"
//        />
//        <section>
//        <button  className="absolute top-3 inset-y-0 right-0 flex items-center pr-3">
//        <img src="/Task/DropDown.svg" alt="WinPercentage" width={20} height={12} />
//          </button>
//        </section>
//       </section>
//     );

//     return (
//         <div className="flex flex-col items-center justify-center ">
//             <DatePicker
//                 customInput={<CustomInput />}
//                 placeholderText="Status" // Placeholder when no date is selected
//             />
//         </div>
//     );
// };
import React, { useState } from 'react';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const Status = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        if (!selectedOptions.includes(option)) {
            setSelectedOptions([...selectedOptions, option]);
        } else {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        }
    };

    const removeOption = (option, e) => {
        e.stopPropagation(); // Prevent dropdown toggle when removing item
        setSelectedOptions(selectedOptions.filter(item => item !== option));
    };

    return (
        <div className="relative w-64">
            <div className="cursor-pointer border border-gray-300 p-2 rounded flex items-center" onClick={toggleDropdown}>
                <div className="flex-grow flex items-center overflow-x-auto no-scrollbar space-x-1" style={{ minHeight: '2.5rem' }}>
                    {selectedOptions.length > 0 ? selectedOptions.map(option => (
                        <span key={option.value} className="flex items-center gap-2 bg-blue-200 rounded-full px-2 py-1 text-sm whitespace-nowrap">
                            {option.label}
                            <span className="cursor-pointer text-red-500" onClick={(e) => removeOption(option, e)}>x</span>
                        </span>
                    )) : <span className="text-gray-500">Select options...</span>}
                </div>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
            {isOpen && (
                <ul className="absolute border border-gray-300 rounded bg-white w-full z-10 mt-1 overflow-auto max-h-40">
                    {options.map(option => (
                        <li key={option.value} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect(option)}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Status;
