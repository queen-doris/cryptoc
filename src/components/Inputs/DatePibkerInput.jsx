import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInputWithIconX = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const datepickerRef = useRef(null);

    // Function to open the date picker when the icon is clicked
    const handleIconClick = () => {
        datepickerRef.current.setOpen(true);
    };

    return (
        <div className="flex items-center space-x-2">
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                ref={datepickerRef}
                customInput={<input className="form-input p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-full" />}
            />
            <button onClick={handleIconClick} className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 4h10a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h1m10 0h1a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h1m10 0h1m-11 4h10" />
                </svg>
            </button>
        </div>
    );
};

export default DateInputWithIconX;
