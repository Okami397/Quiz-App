import React, { useState, useEffect } from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

interface SpinnerProps {
  initialTime?: number;
  size?: number;
  correctAnswers?: number;
  totalQuestions?: number;
  timeEnd?: () => void;
}

const Spinner: React.FC<SpinnerProps> = ({
  initialTime = 60,
  size = 80,
  correctAnswers,
  totalQuestions,
  timeEnd,
}) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (correctAnswers !== undefined && totalQuestions !== undefined) return;

    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    } else {
      if (timeEnd) timeEnd();
    }
  }, [timeLeft, correctAnswers, totalQuestions, timeEnd]);

  const progress =
    correctAnswers !== undefined && totalQuestions !== undefined
      ? (correctAnswers / totalQuestions) * 100
      : (timeLeft / initialTime) * 100;

  const color =
    correctAnswers !== undefined && totalQuestions !== undefined
      ? correctAnswers === totalQuestions
        ? "#1abc9c"
        : "#bb8fce"
      : "hsl(348, 91%, 62%)";

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
      }}
    >
      <CircularProgress
        variant="determinate"
        value={100}
        size={size}
        sx={{ color: "#c4c4c4" }}
      />
      <CircularProgress
        variant="determinate"
        value={progress}
        size={size}
        sx={{
          color,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography sx={{ fontSize: size * 0.125 }} component="div">
          {correctAnswers !== undefined && totalQuestions !== undefined
            ? `Correct`
            : `Time Left`}
        </Typography>
        <Typography sx={{ fontSize: size * 0.125 }} component="div">
          {correctAnswers !== undefined && totalQuestions !== undefined
            ? `${correctAnswers}/${totalQuestions}`
            : `${timeLeft}s`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Spinner;
