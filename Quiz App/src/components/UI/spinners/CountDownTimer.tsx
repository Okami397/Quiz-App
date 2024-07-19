import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface CountDownTimerProps {
  initialTime: number;
}

const CountDownTimer: React.FC<CountDownTimerProps> = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const progress = (timeLeft / initialTime) * 100;

  return (
    <Box
      position="relative"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress
        variant="determinate"
        value={100}
        size={80}
        style={{ color: "#c4c4c4" }}
      />
      <CircularProgress
        variant="determinate"
        value={progress}
        size={80}
        style={{
          color: "hsl(348, 91%, 62%)",
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
        <Typography
          style={{ fontSize: "10px" }}
          component="div"
          color="textSecondary"
        >
          Time Left
        </Typography>
        <Typography
          style={{ fontSize: "10px" }}
          component="div"
          color="textPrimary"
        >
          {`${timeLeft}s`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CountDownTimer;
