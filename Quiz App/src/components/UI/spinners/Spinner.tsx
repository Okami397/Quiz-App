import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface SpinnerProps {
  initialTime?: number;
  size?: number;
  correctAnswers?: number;
  totalQuestions?: number;
}

const Spinner: React.FC<SpinnerProps> = ({
  initialTime = 60,
  size = 80,
  correctAnswers,
  totalQuestions,
}) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (correctAnswers !== undefined && totalQuestions !== undefined) return;

    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [timeLeft, correctAnswers, totalQuestions]);

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
      position="relative"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      style={{ width: size, height: size }}
    >
      <CircularProgress
        variant="determinate"
        value={100}
        size={size}
        style={{ color: "#c4c4c4" }}
      />
      <CircularProgress
        variant="determinate"
        value={progress}
        size={size}
        style={{
          color,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Box
        position="absolute"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
      >
        <Typography style={{ fontSize: size * 0.125 }} component="div">
          {correctAnswers !== undefined && totalQuestions !== undefined
            ? `Correct`
            : `Time Left`}
        </Typography>
        <Typography style={{ fontSize: size * 0.125 }} component="div">
          {correctAnswers !== undefined && totalQuestions !== undefined
            ? `${correctAnswers}/${totalQuestions}`
            : `${timeLeft}s`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Spinner;
