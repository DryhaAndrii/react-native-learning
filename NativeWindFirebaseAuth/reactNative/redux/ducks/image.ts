import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface imageState {
  imageUri: string | null;
}

const initialState: imageState = {
  imageUri: null,
};

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setStoreImageUri: (state, action: PayloadAction<string | null>) => {
      state.imageUri = action.payload;
    },
  },
});

export const { setStoreImageUri } = imageSlice.actions;

export default imageSlice.reducer;
