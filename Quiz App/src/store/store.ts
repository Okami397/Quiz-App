import { configureStore } from "@reduxjs/toolkit";
import quizConfig from "./reducers/quizConfigSlice";
import resultsSlice from "../store/reducers/resultsSlice";

import { quizApi } from "../services/quizApi";
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
  reducer: {
    quizConfig: quizConfig,
    results: resultsSlice,
    quizApi: quizApi.reducer,
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware().concat(quizApi.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
