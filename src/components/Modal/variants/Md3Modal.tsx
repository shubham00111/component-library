"use client";
import { createContext, useContext, useState } from "react";
import { CircleX } from "lucide-react";

type ModalContextType = { show: boolean; setShow: (v: boolean) => void };

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("Must be used within Md3Modal");
  return ctx;
};

const Trigger = ({ children }: { children?: React.ReactNode }) => {
  const { setShow } = useModal();
  return (
    <button
      onClick={() => setShow(true)}
      className="px-6 py-2.5 bg-[#6750a4] text-white font-medium rounded-[20px] hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-200 text-sm dark:bg-[#d0bcff] dark:text-[#381e72]"
    >
      {children ?? "Open Dialog"}
    </button>
  );
};

const Overlay = ({ children }: { children: React.ReactNode }) => {
  const { show, setShow } = useModal();
  if (!show) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-[#1c1b1f]/60 flex items-center justify-center p-4"
      onClick={() => setShow(false)}
    >
      {children}
    </div>
  );
};

const Dialog = ({ children }: { children: React.ReactNode }) => (
  <div
    className="relative bg-[#fffbfe] dark:bg-[#2b2930] rounded-[28px] shadow-[0_4px_8px_rgba(0,0,0,0.3),0_8px_12px_rgba(0,0,0,0.15)] w-full max-w-md"
    onClick={(e) => e.stopPropagation()}
    role="dialog"
    aria-modal="true"
  >
    {children}
  </div>
);

const Content = ({ children }: { children: React.ReactNode }) => (
  <div className="px-6 pb-3 pt-2 text-sm text-[#49454f] dark:text-[#cac4d0]">{children}</div>
);

const Title = ({ children }: { children: React.ReactNode }) => {
  const { setShow } = useModal();
  return (
    <div className="flex items-center justify-between px-6 pt-6 pb-4">
      <h2 className="text-xl font-semibold text-[#1c1b1f] dark:text-[#e6e1e5]">{children}</h2>
      <button
        onClick={() => setShow(false)}
        className="text-[#49454f] dark:text-[#cac4d0] hover:text-[#1c1b1f] dark:hover:text-[#e6e1e5] transition-colors"
        aria-label="Close dialog"
      >
        <CircleX size={20} />
      </button>
    </div>
  );
};

const Close = ({ children }: { children?: React.ReactNode }) => {
  const { setShow } = useModal();
  return (
    <button
      onClick={() => setShow(false)}
      className="px-6 py-2.5 text-[#6750a4] dark:text-[#d0bcff] font-medium rounded-[20px] text-sm hover:bg-[#6750a4]/8 dark:hover:bg-[#d0bcff]/8 transition-all duration-200"
    >
      {children ?? "Close"}
    </button>
  );
};

const Md3Modal = ({
  children,
  initialOpen = false,
}: {
  children: React.ReactNode;
  initialOpen?: boolean;
}) => {
  const [show, setShow] = useState(initialOpen);
  return (
    <ModalContext.Provider value={{ show, setShow }}>
      {children}
    </ModalContext.Provider>
  );
};

Md3Modal.Trigger = Trigger;
Md3Modal.Overlay = Overlay;
Md3Modal.Dialog = Dialog;
Md3Modal.Content = Content;
Md3Modal.Title = Title;
Md3Modal.Close = Close;

export default Md3Modal;
