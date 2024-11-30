import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { postsApi } from "./postsApi";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export default store;
