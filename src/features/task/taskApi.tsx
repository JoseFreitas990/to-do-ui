import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Task {
  id: number;
  title: string;
  topicId: number;
  description: string;
  completed: boolean;
}

export const taskApi = createApi({
  reducerPath: "taskApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => "/tasks",
      providesTags: ["Task"],
    }),
  }),
});

export const { useGetTasksQuery } = taskApi;
