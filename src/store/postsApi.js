import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (item) => ({
    getPosts: item.query({
      query: () => "posts",
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
