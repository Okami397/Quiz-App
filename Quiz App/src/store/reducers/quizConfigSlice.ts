import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question, Configuration } from "../../models/quiz";

interface QuizConfig {
  configuration: Configuration;
  questions: Question[];
}

const initialState: QuizConfig = {
  configuration: {
    amount: 0,
    category: { id: 0, value: "" },
    difficulty: "",
    type: "",
    time: 0,
  },
  questions: [],
};

const quizConfigSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizConfig: (state, action: PayloadAction<Configuration>) => {
      state.configuration = action.payload;
    },
    clearQuizData: (state) => {
      state.configuration = initialState.configuration;
      state.questions = [];
    },
  },
});

export const { setQuizConfig, clearQuizData } = quizConfigSlice.actions;
export default quizConfigSlice.reducer;
