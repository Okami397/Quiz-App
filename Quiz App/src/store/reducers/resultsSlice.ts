import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Results {
  currentQuestion: number;
  correctAnswers: number;
  totalQuestions: number;
  time: number;
}

const initialState: Results = {
  currentQuestion: 0,
  correctAnswers: 0,
  totalQuestions: 0,
  time: 0,
};

export const results = createSlice({
  name: "results",
  initialState,
  reducers: {
    setTotal(state, action) {
      state.totalQuestions = action.payload;
    },
    setCurrent(state) {
      state.currentQuestion += 1;
    },
    setCorrectAnswers(state) {
      state.correctAnswers += 1;
    },
    setTime(state, action) {
      state.time = action.payload;
    },
    resetQuiz(state) {
      state.correctAnswers = 0;
      state.currentQuestion = 0;
      state.correctAnswers = 0;
      state.time = 0;
    },
  },
});

export const { setTotal, setCurrent, setCorrectAnswers, setTime, resetQuiz } =
  results.actions;
export default results.reducer;
