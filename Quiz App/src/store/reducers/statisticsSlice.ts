import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Stats {
  total: number;
  correct: number;
}

interface Statistics {
  totalQuestions: number;
  totalCorrect: number;
  category: { [key: string]: Stats };
  difficulty: { [key: string]: Stats };
  type: { [key: string]: Stats };
}

const initialState: Statistics = {
  totalQuestions: 0,
  totalCorrect: 0,
  category: {},
  difficulty: {},
  type: {},
};

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    setStatistics(state, action: PayloadAction<Statistics>) {
      const { totalQuestions, totalCorrect, category, difficulty, type } =
        action.payload;

      state.totalQuestions += totalQuestions;
      state.totalCorrect += totalCorrect;

      for (const [cat, count] of Object.entries(category)) {
        if (!state.category[cat]) {
          state.category[cat] = { total: 0, correct: 0 };
        }
        state.category[cat].total += count.total;
        state.category[cat].correct += count.correct;
      }

      for (const [diff, count] of Object.entries(difficulty)) {
        if (!state.difficulty[diff]) {
          state.difficulty[diff] = { total: 0, correct: 0 };
        }
        state.difficulty[diff].total += count.total;
        state.difficulty[diff].correct += count.correct;
      }

      for (const [typ, count] of Object.entries(type)) {
        if (!state.type[typ]) {
          state.type[typ] = { total: 0, correct: 0 };
        }
        state.type[typ].total += count.total;
        state.type[typ].correct += count.correct;
      }
    },
    resetStatistics(state) {
      state.totalQuestions = 0;
      state.totalCorrect = 0;
      state.category = {};
      state.difficulty = {};
      state.type = {};
    },
  },
});

export const { setStatistics, resetStatistics } = statisticsSlice.actions;
export default statisticsSlice.reducer;
