import React, { MouseEventHandler, ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "../buttons/Buttons.module.css";

interface MyButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const MyButton: React.FC<MyButtonProps> = ({ onClick, children }) => {
  return (
    <motion.button
      className={styles.myBtn}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default MyButton;
