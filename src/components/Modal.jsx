import { useEffect, useState } from 'react';


function Modal({ isOpen, children }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false), 300); // Match the duration of the transition
    }
  }, [isOpen]);

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ease-in-out ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative bg-white flex flex-col gap-12 p-12 rounded-lg shadow-lg transition-transform duration-300 transform
      }">
        <div className='text-blue-dark'>
        {children}
        </div>
        <button
          onClick={handleClose}
          className="bg-purple text-white p-1 rounded-lg w-1/2 self-center hover:bg-opacity-75 transition duration-150 ease-in-out"
          // className="self-end"
        >
          Close
          {/* <Icon icon="carbon:close-filled" width="1.5em" height="1.5em" style={{color: "#EF4444"}} /> */}
        </button>
        
      </div>
    </div>
  );
}

export default Modal;