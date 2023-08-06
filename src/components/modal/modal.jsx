import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modal from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { closeModal } from "../../services/actions/modal";
import { useNavigate } from "react-router-dom";

const modalRootElement = document.querySelector("#react-modals");

export default function Modal({ children, isOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function closeModals() {
    dispatch(closeModal());
    navigate("/");
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      closeModals();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

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

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
