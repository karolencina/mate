import React from "react";
import styles from "./index.module.css";
import Button from "../Button";
import Icon from "../Icon";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className={styles["modal-overlay"]} onClick={onClose}>
      <div
        className={styles["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <Button className={styles["btn-close"]} onClick={onClose}>
          <Icon name="x" alt="Close" className={styles.icon} />
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
