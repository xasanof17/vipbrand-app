import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: null,
};

export const limitSlice = createSlice({
  name: "limit",
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLimit } = limitSlice.actions;

export default limitSlice.reducer;
