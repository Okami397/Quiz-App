import React, { MouseEventHandler, ReactNode } from "react";
import styles from "../buttons/Buttons.module.css";

interface AnswerButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.answerBtn} onClick={onClick}>
      {children}
    </button>
  );
};

export default AnswerButton;
