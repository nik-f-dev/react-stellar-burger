import ReactDOM from "react-dom";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modal from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useEffect } from "react";

const modalRootElement = document.querySelector("#react-modals");

export default function Modal({ children, isOpenModal, setIsOpenModal }) {
  function closeModal() {
    setIsOpenModal({...isOpenModal,
      orderModal: false,
      ingredientModal: false,
      isOpen: false
    });
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  useEffect(() => {
    if (isOpenModal.isOpen) {
    document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpenModal]);

  return ReactDOM.createPortal(
    (
      <div className={isOpenModal.isOpen ? `${modal.active}`: `${modal.inactive}`}>
        <ModalOverlay closeModal={closeModal}/>
        <div className={modal.modalBody}>
          {isOpenModal.ingredientModal && <h2 className={`${modal.heading} mt-10 text text_type_main-large`}>Детали ингредиента</h2>}
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
