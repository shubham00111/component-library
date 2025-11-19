/**
 * Modal context type holding all modal state and methods
 */
export interface ModalContextType {
  show: boolean;
  setShow: (show: boolean) => void;
}

/**
 * Main Modal component props
 */
export interface ModalProps {
  children: React.ReactNode;
  initialOpen?: boolean;
}

/**
 * Modal.Overlay sub-component props
 */
export interface OverlayProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Modal.Dialog sub-component props
 */
export interface DialogProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Modal.Content sub-component props
 */
export interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Modal.Trigger sub-component props
 */
export interface TriggerProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

/**
 * Modal.Title sub-component props
 */
export interface TitleProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

/**
 * Modal.Close sub-component props
 */
export interface CloseProps {
  children?: React.ReactNode;
  className?: string;
}
