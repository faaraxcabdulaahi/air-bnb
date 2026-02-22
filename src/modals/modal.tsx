import { IModalProps } from "@/types/types";

const Modal = ({ isOpen, onClose, title, children }: IModalProps) => {
  return <div aria-hidden={isOpen} className="">

  </div>;
};

export default Modal;
