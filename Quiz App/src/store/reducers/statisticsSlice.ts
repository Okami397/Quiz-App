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

function enhanceCounts(
  initialCounts: { [key: string]: Stats },
  incomingCounts: { [key: string]: Stats },
) {
  return Object.entries(incomingCounts).reduce((accCounts, [key, count]) => {
    if (!accCounts[key]) {
      accCounts[key] = { total: 0, correct: 0 };
    }
    accCounts[key].total += count.total;
    accCounts[key].correct += count.correct;

    return accCounts;
  }, initialCounts);
}

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    setStatistics(state, action: PayloadAction<Statistics>) {
      const { totalQuestions, totalCorrect, category, difficulty, type } =
        action.payload;

      state.totalQuestions += totalQuestions;
      state.totalCorrect += totalCorrect;
      state.category = enhanceCounts(state.category, category);
      state.difficulty = enhanceCounts(state.difficulty, difficulty);
      state.type = enhanceCounts(state.type, type);
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
