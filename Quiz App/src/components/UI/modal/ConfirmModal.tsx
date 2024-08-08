import React, { MouseEventHandler } from "react";
import styles from "./ConfirmModal.module.css";

interface ConfirmModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  children,
  active,
  setActive,
  onClick,
}) => {
  if (!active) return null;

  return (
    <div className={styles.container} onClick={() => setActive(false)}>
      <div className={styles.myModal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ConfirmModal;
