import { createContext, useContext, useState } from "react";
import { cn } from "../../utils/Util";
import { CircleX } from "lucide-react";
import type {
  ModalContextType,
  ModalProps,
  OverlayProps,
  DialogProps,
  ContentProps,
  TriggerProps,
  TitleProps,
  CloseProps,
} from "./types";

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Modal components must be used within a Modal component");
  }
  return context;
};

/**
 * Overlay - Semi-transparent background behind the modal
 */
const Overlay = ({ children, className, onClick }: OverlayProps) => {
  const { show } = useModal();

  if (!show) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-10 bg-black/50 flex items-center justify-center",
        className
      )}
      onClick={onClick}
      role="presentation"
    >
      {children}
    </div>
  );
};

/**
 * Dialog - Main modal container/box
 */
const Dialog = ({ children, className }: DialogProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-lg border border-gray-200",
        "min-w-96 max-w-2xl max-h-screen overflow-y-auto",
        className
      )}
      role="dialog"
      aria-modal="true"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

/**
 * Content - Main content area inside modal
 */
const Content = ({ children, className }: ContentProps) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

/**
 * Trigger - Button/element that opens the modal
 */
const Trigger = ({ children, className, asChild }: TriggerProps) => {
  const { setShow } = useModal();

  if (asChild) {
    return <>{children}</>;
  }

  return (
    <button
      onClick={() => setShow(true)}
      className={cn(
        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
};

/**
 * Title - Modal header with close button
 */
const Title = ({ children, className, onClose }: TitleProps) => {
  const { setShow } = useModal();

  const handleClose = () => {
    onClose?.();
    setShow(false);
  };

  return (
    <div className={cn("flex items-center justify-between mb-4", className)}>
      <h2 className="text-lg font-semibold text-gray-900">{children}</h2>
      <button
        onClick={handleClose}
        className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="Close modal"
      >
        <CircleX size={24} />
      </button>
    </div>
  );
};

/**
 * Close - Standalone close button
 */
const Close = ({ children, className }: CloseProps) => {
  const { setShow } = useModal();

  return (
    <button
      onClick={() => setShow(false)}
      className={cn(
        "px-4 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition-colors",
        className
      )}
    >
      {children || "Close"}
    </button>
  );
};

/**
 * Modal - Main compound component
 */
const Modal = ({ children, initialOpen = false }: ModalProps) => {
  const [show, setShow] = useState(initialOpen);

  const value: ModalContextType = {
    show,
    setShow,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

// Attach sub-components
Modal.Overlay = Overlay;
Modal.Dialog = Dialog;
Modal.Content = Content;
Modal.Trigger = Trigger;
Modal.Title = Title;
Modal.Close = Close;

export default Modal;
