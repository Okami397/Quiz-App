import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentQuestion,
  totalQuestions,
}) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
      }}
    >
      <Box sx={{ width: "100%", mt: 4 }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <Typography>
        Question {currentQuestion} out of {totalQuestions}
      </Typography>
    </Box>
  );
};

export default ProgressBar;
