import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SelectPhase = () => {
    

    // Custom Input with a placeholder and showing the date when selected
    const CustomInput = () => (
         <section className='flex flex-col'>
         <label htmlFor="label" className='font-[700] text-[12px] mb-3'>Status</label>
          <input
         type="text"
         placeholder="Select Phase" // Static placeholder
         className="placeholder:text-[#A6A3A3] h-[35px] border w-[240px] border-[##A6A3A373] border-1 rounded-[7px] p-4 mb-4"
       />
       <section>
       <button  className="absolute top-3 inset-y-0 right-0 flex items-center pr-3">
       <img src="/Task/DropDown.svg" alt="Select Phase" width={20} height={12} />
         </button>
       </section>
      </section>
    );

    return (
        <div className="flex flex-col items-center ">
            <DatePicker
                customInput={<CustomInput />}
                placeholderText="SelectPhase" // Placeholder when no date is selected
            />
        </div>
    );
};

export default SelectPhase;
