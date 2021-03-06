import { useState, useEffect, useRef, ReactNode } from "react";
import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  setIsOpen: () => void;
}

export function Modal({ isOpen, children, setIsOpen }: ModalProps) {
  const [modalStatus, setModalStatus] = useState(isOpen);

  const ref = useRef<Boolean>();

  useEffect(() => {
    ref.current = isOpen;
    if (ref.current !== modalStatus) {
      setModalStatus(isOpen);
    }
  }, [ref, isOpen, modalStatus]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "736px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {children}
    </ReactModal>
  );
}
