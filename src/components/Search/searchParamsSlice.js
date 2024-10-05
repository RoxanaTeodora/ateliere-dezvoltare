import { createSlice } from "@reduxjs/toolkit";

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: {
    type: "",
    name: "",
  },
  reducers: {
    SEARCH_FURNITURE: (state, action) => {
      state.type = action.payload.type;
      state.name = action.payload.name;
    },
  },
});

export const { SEARCH_FURNITURE } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
