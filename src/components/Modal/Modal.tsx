import { createPortal } from "react-dom";
import useEscapeKey from "../../utils/useEscapeKey";
import "./style.css";

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

/* 
  I built this modal in the past, it's not the greatest but it works.

  Future things to do:
  1. Trap Focus, so interaction with the outside of the modal is not possible
  2. Close modal by clicking outside of it
  3. Review Accessibility: https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html
*/

const Modal = ({ open, onClose, children }: ModalProps) => {
  useEscapeKey({ onClose });

  if (!open) return null;
  return createPortal(
    <div
      data-testid="modal"
      className="modal"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-overlay" data-a11y-dialog-hide></div>
      <div className="modal-content">
        {children}
        <div className="modal-footer">
          <button onClick={onClose} aria-label="save & close">
            save
          </button>
          <button onClick={onClose} aria-label="close screen">
            close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
