import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

export interface CounterState {
  value: number;
  isHydrated: boolean;
}

const initialState: CounterState = {
  value: 0,
  isHydrated: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setHydrated: (state, action: PayloadAction<boolean>) => {
      state.isHydrated = action.payload;
    },
  },
});

export const { setValue, increment, decrement, setHydrated } =
  counterSlice.actions;

export default counterSlice.reducer;

const STORAGE_KEY = "counter_value";

export const loadCounterFromStorage = () => async (dispatch: AppDispatch) => {
  try {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    const value = stored ? parseInt(stored, 10) : 0;
    dispatch(setValue(value));
  } catch (e) {
    console.error("Error loading from async storage:", e);
  } finally {
    dispatch(setHydrated(true));
  }
};

export const saveCounterToStorage = (value: number) => async () => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, value.toString());
  } catch (e) {
    console.error("Saving error:", e);
  }
};
