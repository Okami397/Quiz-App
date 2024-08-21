import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <Box
      component={motion.div}
      sx={{
        width: "3rem",
        height: "3rem",
        border: "2px solid #3498db",
        borderRadius: "20%",
      }}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        borderRadius: ["20%", "35%", "50%", "50%", "35%", "20%"],
      }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default Loading;
