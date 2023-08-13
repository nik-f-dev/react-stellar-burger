import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modal from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useEffect, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../services/actions/modal";
import { useNavigate } from "react-router-dom";

const modalRootElement = document.querySelector("#react-modals")!;

export type TModalProps = {
  children: ReactNode;
};

export default function Modal({ children }: TModalProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function closeModals() {
    dispatch(closeModal());
    navigate(-1);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      closeModals();
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
      <ModalOverlay closeModal={closeModals} />
      <div className={modal.modalBody}>
        <button className={modal.closeButton} onClick={closeModals}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </div>,
    modalRootElement
  );
}
