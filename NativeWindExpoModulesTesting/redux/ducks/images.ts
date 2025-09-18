import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface imagesState {
  imagesUri: string[];
  isHydrated: boolean;
}

const initialState: imagesState = {
  imagesUri: [],
  isHydrated: false,
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImagesUri: (state, action: PayloadAction<string[]>) => {
      state.imagesUri = action.payload;
    },
    setHydrated: (state, action: PayloadAction<boolean>) => {
      state.isHydrated = action.payload;
    },
  },
});

export const { setImagesUri, setHydrated } = imagesSlice.actions;

export default imagesSlice.reducer;
