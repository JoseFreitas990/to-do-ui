import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { taskApi } from "features/task/taskApi";
import { topicApi } from "features/topic/topicApi";
import topicReducer from "features/topic/topicSlice";
export const store = configureStore({
  reducer: {
    topic: topicReducer,
    [topicApi.reducerPath]: topicApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topicApi.middleware, taskApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
