import { createSlice } from "@reduxjs/toolkit";

const defaultValue = {
  value: 0,
};

export const counterReducer = createSlice({
  name: "counter",
  initialState: defaultValue,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// // Action creators are generated for each case reducer function
export const { incrementByAmount } = counterReducer.actions;

export default counterReducer.reducer;
