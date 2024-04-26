import React from 'react';

const ProposalModal = ({ isOpen, onClose, children }) => {
   if(!isOpen) return null;
   return ( 
      <>
         <div className="modal-overlay" onClick={onClose}>
      <div className="modal-contentp" onClick={e => e.stopPropagation()}>
    <section className='flex items-center justify-end'> 
    <button className='w-6 h-6 text-[#4D67F9] font-bold bg-[#F1F3F9] rounded-[50%] flex items-center justify-center' onClick={onClose}>
          <img src="/Dashboard/CloseModal.svg" alt="Close modal" width={10} height={20} />
        </button>
    </section>
        {children}
      </div>
    </div>
      </>
    );
}
 
export default ProposalModal;


