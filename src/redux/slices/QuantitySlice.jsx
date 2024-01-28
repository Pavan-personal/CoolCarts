import { createSlice } from "@reduxjs/toolkit";

export const QuantitySlice = createSlice({
  name: "quantity",
  initialState: {},
  reducers: {
    addOn: (state, action) => {
      state.hasOwnProperty(action.payload)? state[action.payload] +=1 : state[action.payload] = 2
    },
    reduce: (state, action) => {
      state[action.payload] > 0 ? state[action.payload] -= 1 : state[action.payload] = 0
    },
  },
});

export const { addOn, reduce } = QuantitySlice.actions;
export default QuantitySlice.reducer;
