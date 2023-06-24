import modal from './modal-overlay.module.css';


export default function ModalOverlay({ closeModal }) {
  return (
    <div className={modal.modalOverlay} onClick={closeModal}></div>
  )
}
