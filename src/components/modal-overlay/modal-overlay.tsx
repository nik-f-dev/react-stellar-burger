import modal from "./modal-overlay.module.css";
import { MouseEventHandler } from "react";

export type TModalOverlayProps = {
  closeModal: MouseEventHandler<HTMLDivElement>;
};

export default function ModalOverlay({ closeModal }: TModalOverlayProps) {
  return <div className={modal.modalOverlay} onClick={closeModal}></div>;
}
