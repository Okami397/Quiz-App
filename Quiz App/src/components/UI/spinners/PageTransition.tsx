import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();

  const variants = {
    hidden: {
      opacity: 0,
      y: "100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      y: "100vh",
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.key}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
