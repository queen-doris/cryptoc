import React, { useState, useRef } from 'react';

const FileUploadInput = () => {
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('');
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="flex items-center space-x-2 p-2">
         
            <input
                type="text"
                readOnly
                value={fileName}
                placeholder="Attach document"
                className="flex p-2  w-[120px] border-gray-300  focus:outline-none focus:border-blue-500"
            />
            <button
                onClick={handleUploadClick}
                className=" text-white p-2 rounded-r-lg "
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13C10.4295 13.5741 10.9774 14.0492 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9404 15.7513 14.6898C16.4231 14.4392 17.0331 14.0471 17.54 13.54L20.54 10.54C21.4508 9.59699 21.9548 8.33397 21.9434 7.02299C21.932 5.71201 21.4061 4.45794 20.4791 3.5309C19.5521 2.60386 18.298 2.07802 16.987 2.06663C15.676 2.05523 14.413 2.55921 13.47 3.47L11.75 5.18" stroke="#4D67F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 11C13.5706 10.4259 13.0227 9.95083 12.3935 9.60707C11.7643 9.26331 11.0685 9.05889 10.3534 9.00768C9.63822 8.95646 8.92043 9.05964 8.24867 9.31023C7.57691 9.56082 6.9669 9.95294 6.46002 10.46L3.46002 13.46C2.54923 14.403 2.04525 15.666 2.05665 16.977C2.06804 18.288 2.59388 19.5421 3.52092 20.4691C4.44796 21.3961 5.70203 21.922 7.01301 21.9334C8.32399 21.9448 9.58701 21.4408 10.53 20.53L12.24 18.82" stroke="#4D67F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
                accept=".pdf,.doc,.docx" // Specify acceptable file types
            />
        </div>
    );
};

export default FileUploadInput;
