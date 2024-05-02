import React from 'react';

const Percentage = () => {
    return (
        <div className="flex flex-col mb-3 mt-1">
            <label htmlFor="winPercentage" className="font-bold text-[12px] mb-3">Win Percentage</label>
            <div className="relative w-[240px]">
                <input
                    type="text"
                    id="winPercentage"
                    placeholder="Win Percentage"
                    className="placeholder:text-[#A6A3A3] h-[35px] w-[240px] border border-[#A6A3A373] rounded-[7px] pl-4 pr-10"
                />
                <button className="absolute top-0 right-0 inset-y-0 flex items-center pr-3">
                    <img src="/Task/Percentage.svg" alt="Win Percentage" width={20} height={12} />
                </button>
            </div>
        </div>
    );
};

export default Percentage;
