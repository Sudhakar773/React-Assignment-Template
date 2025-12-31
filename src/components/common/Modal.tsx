type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;
  return <div className="modal">{children}</div>;
};
