import React, { MouseEventHandler, ReactNode } from "react";
import styles from "../buttons/Buttons.module.css";

interface MyButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const MyButton: React.FC<MyButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.myBtn} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
