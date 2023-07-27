import modal from "./modal-overlay.module.css";
import PropTypes from "prop-types";

export default function ModalOverlay({ closeModal }) {
  return <div className={modal.modalOverlay} onClick={closeModal}></div>;
}

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
