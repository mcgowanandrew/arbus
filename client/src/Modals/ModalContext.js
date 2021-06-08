import React, { useState, createContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    if (isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <ModalContext.Provider
      value={{ isOpen, handleToggleOpen }}
    >{children}</ModalContext.Provider>
  );
};
export default ModalContext;