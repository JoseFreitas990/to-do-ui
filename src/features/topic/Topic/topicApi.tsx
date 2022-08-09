import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Topic {
  id: number;
  name: string;
}

export const topicApi = createApi({
  reducerPath: "topicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  tagTypes: ["Topic"],
  endpoints: (builder) => ({
    getTopics: builder.query<Topic[], void>({
      query: () => "/topics",
      providesTags: ["Topic"],
    }),
  }),
});

export const { useGetTopicsQuery } = topicApi;
