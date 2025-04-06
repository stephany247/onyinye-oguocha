import { useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";

function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose(); // Automatically close the modal after 15 seconds
      }, 10000);

      return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
    }
  }, [isOpen, onClose]);

  return (
    <div
      className={`bg-dark-blue dark:bg-purple text-white p-4 rounded-lg shadow-lg transition-transform duration-500 flex justify-between items-center ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
      }`}
    >
      {children}
      <IoIosCloseCircle size={24} onClick={onClose} />
    </div>
  );
}

export default Modal;
