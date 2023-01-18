import { createSlice } from "@reduxjs/toolkit";

const initialText = {
  quant: 1,
};

const quantitySlice = createSlice({
  name: "quantity",
  initialState: initialText,
  reducers: {
    showquantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const { showquantity } = quantitySlice.actions;
const quantityReducer = quantitySlice.reducer;

export default quantityReducer;
