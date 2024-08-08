import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Stats = {
  type: string;
  total: number;
  correct: number;
};

interface Statistics {
  totalQuestions: number;
  totalCorrect: number;
  category: Stats[];
  difficulty: Stats[];
  type: Stats[];
}

const initialState: Statistics = {
  totalQuestions: 0,
  totalCorrect: 0,
  category: [],
  difficulty: [],
  type: [],
};

interface SetStatisticsPayload {
  total: number;
  correct: number;
  category: Stats;
  difficulty: Stats;
  type: Stats;
}

const setStats = (
  array: Stats[],
  type: string,
  total: number,
  correct: number,
) => {
  const index = array.findIndex((item) => item.type === type);
  if (index >= 0) {
    array[index] = {
      ...array[index],
      total: array[index].total + total,
      correct: array[index].correct + correct,
    };
  } else {
    array.push({ type, total, correct });
  }
};

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    setStatistics(state, action: PayloadAction<SetStatisticsPayload>) {
      const { total, correct, category, difficulty, type } = action.payload;

      state.totalQuestions += total;
      state.totalCorrect += correct;

      setStats(state.category, category.type, category.total, category.correct);
      setStats(
        state.difficulty,
        difficulty.type,
        difficulty.total,
        difficulty.correct,
      );
      setStats(state.type, type.type, type.total, type.correct);
    },
  },
});

export const { setStatistics } = statisticsSlice.actions;
export default statisticsSlice.reducer;
