import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { topicApi } from "features/topic/Topic/topicApi";

export const store = configureStore({
  reducer: {
    [topicApi.reducerPath]: topicApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topicApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
