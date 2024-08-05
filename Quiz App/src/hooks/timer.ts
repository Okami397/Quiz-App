import { useRef, useCallback } from "react";

const useTimer = () => {
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const elapsedTimeRef = useRef(0);

  const startTimer = useCallback(() => {
    if (intervalRef.current) return;

    startTimeRef.current = Date.now() - elapsedTimeRef.current;
    intervalRef.current = setInterval(() => {
      if (startTimeRef.current !== null) {
        elapsedTimeRef.current = Date.now() - startTimeRef.current;
      }
    }, 1000);
  }, []);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const resetTimer = useCallback(() => {
    stopTimer();
    elapsedTimeRef.current = 0;
    startTimeRef.current = null;
  }, [stopTimer]);

  const getElapsedTime = useCallback(() => {
    return Math.floor(elapsedTimeRef.current / 1000);
  }, []);

  return { startTimer, stopTimer, resetTimer, getElapsedTime };
};

export default useTimer;
