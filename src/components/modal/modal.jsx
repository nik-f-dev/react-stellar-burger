import ReactDOM from "react-dom";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modal from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useEffect } from "react";
import PropTypes from "prop-types";

const modalRootElement = document.querySelector("#react-modals");

export default function Modal({ children, isOpenModal, setIsOpenModal, isOpen }) {
  function closeModal() {
    setIsOpenModal({...isOpenModal,
      orderModal: false,
      ingredientModal: false
    });
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return ReactDOM.createPortal(
    (
      <div className={isOpen ? `${modal.active}`: `${modal.inactive}`}>
        <ModalOverlay closeModal={closeModal}/>
        <div className={modal.modalBody}>
          <button className={modal.closeButton} onClick={closeModal}>
            <CloseIcon type="primary" />
          </button>
          {children}
        </div>
      </div>
      ),
        modalRootElement
    )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpenModal: PropTypes.shape({
    orderModal: PropTypes.bool.isRequired,
    ingredientModal: PropTypes.bool.isRequired,
  }).isRequired,
  setIsOpenModal: PropTypes.func.isRequired
}
