import React, { useState, useRef, useEffect } from 'react';

const options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' },
    { value: 'Option 6', label: 'Option 6' }
];

const Status = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
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
        setSelectedOption(option.label);
        setIsOpen(false);
    };

    return (
        <div ref={wrapperRef} className="flex flex-col relative w-64">
            <label htmlFor="status-input" className='font-[700] text-[12px] mb-3'>Status</label>
            <div className="relative">
                <input
                    id="status-input"
                    type="text"
                    placeholder="Status"
                    className="cursor-pointer placeholder:text-[#A6A3A3] h-[35px] border w-[240px] border-[#A6A3A373] border-1 rounded-[7px] pl-4 pr-10 mb-4"
                    onClick={toggleDropdown}
                    value={selectedOption}
                    readOnly
                />
                <button  className="absolute -top-4 inset-y-0 right-2 flex items-center pr-3">
       <img src="/Task/DropDown.svg" alt="Select Phase" width={20} height={12} />
         </button>
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

export default Status;
