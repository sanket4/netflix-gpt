import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    searchResult: null,
    searchQuery: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchResults: (state, action) => {
      const { searchQuery, results } = action.payload;
      state.searchResult = results;
      state.searchQuery = searchQuery;
    },
  },
});

export const { toggleGPTSearchView, addSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
