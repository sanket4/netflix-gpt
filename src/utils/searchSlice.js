import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGPTSearchView } = searchSlice.actions;
export default searchSlice.reducer;
