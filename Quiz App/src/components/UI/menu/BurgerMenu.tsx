import React, { useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./Menu.module.css";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box component={motion.div}>
      {/* <p>Light mode</p> */}
      {/* <p>Dark mode</p> */}
    </Box>
  );
};

export default BurgerMenu;
