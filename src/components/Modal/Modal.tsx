import React, { createContext, useContext, useState } from "react";
import { cn } from "../../utils/Util";
import { CircleX } from "lucide-react";

const ModalContext = createContext<any>(undefined);

const Overlay = ({ children, className = "" }: any) => {
  const { show } = useContext(ModalContext);

  return (
    show && (
      <div
        className={cn(
          className,
          "h-screen w-screen bg-gray-200 flex justify-center items-center"
        )}
      >
        {children}
      </div>
    )
  );
};

const Dialog = ({ children }: any) => {
  return (
    <div className="bg-neutral-100 border-2 p-3 border-neutral-500 rounded-md min-w-2xl min-h-1/2 ">
      {children}
    </div>
  );
};

const Content = ({ children }: any) => {
  return <div className="py-6">{children}</div>;
};

const Trigger = ({ children }: any) => {
  const { setShow } = useContext(ModalContext);
  return (
    <div
      onMouseDown={() => {
        setShow(true);
      }}
    >
      {children}
    </div>
  );
};

const Title = ({ children }: any) => {
  const { setShow } = useContext(ModalContext);
  return (
    <div className="flex justify-between ">
      {children}

      <div className="cursor-pointer" onClick={() => setShow(false)}>
        <CircleX />
      </div>
    </div>
  );
};
const Modal = ({ children }: any) => {
  const [show, setShow] = useState(true);
  const value = {
    show,
    setShow,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

Modal.Overlay = Overlay;
Modal.Trigger = Trigger;
Modal.Content = Content;
Modal.Title = Title;
Modal.Dialog = Dialog;

export default Modal;
