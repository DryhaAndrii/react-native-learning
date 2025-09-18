import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./ducks/image";
import loadingReducer from "./ducks/loading";

export const store = configureStore({
  reducer: {
    image: imageReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
