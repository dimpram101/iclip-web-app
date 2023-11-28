import React from "react";

const Modal = ({ open, children }) => {
  return (
    <div
      className={`${
        open
          ? "fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-30"
          : "hidden"
      } `}
    >
      Modal {children}
    </div>
  );
};

export default Modal;
