import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modal from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const modalRootElement = document.querySelector("#react-modals")!;

export type TModalProps = {
  children: ReactNode;
  closePath?: string;
};

export default function Modal({ children, closePath }: TModalProps) {
  const navigate = useNavigate();
  function closeModals(path: string) {
    navigate(path);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape" && closePath) {
      closeModals(closePath);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={modal.active}>
      <ModalOverlay closeModal={() => closePath && closeModals(closePath)} />
      <div className={modal.modalBody}>
        <button
          className={modal.closeButton}
          onClick={() => closePath && closeModals(closePath)}
        >
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </div>,
    modalRootElement
  );
}
