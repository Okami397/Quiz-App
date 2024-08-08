import { combineReducers, configureStore } from "@reduxjs/toolkit";
import quizConfig from "./reducers/quizConfigSlice";
import resultsSlice from "../store/reducers/resultsSlice";
import { quizApi } from "../services/quizApi";
import statisticsSlice from "./reducers/statisticsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  quizConfig,
  results: resultsSlice,
  quizApi: quizApi.reducer,
  statisticsSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["results", "quizConfig", "statisticsSlice"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(quizApi.middleware),
});

export const persistor = persistStore(store);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
