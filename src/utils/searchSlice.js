import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    searchResult: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchResults: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export const { toggleGPTSearchView, addSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
