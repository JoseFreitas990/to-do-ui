import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface TopicProps {
  id: number[];
}

interface InitialState {}

const topicSlice = createSlice({
  name: "activeTopic",
  initialState: [],
  reducers: {
    setActiveTopic: (
      state: number[],
      action: { payload: number | undefined }
    ) => {},
  },
});

export const getActiveTopic = (state: RootState) => state.topic;

export const { setActiveTopic } = topicSlice.actions;

const topicReducer = topicSlice.reducer;

export default topicReducer;
