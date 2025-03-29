import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  results: null,
  loading: false,
  error: null,
  history: [],
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    startQuery: (state) => {
      state.loading = true;
      state.error = null;
    },
    setResults: (state, action) => {
      state.results = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addToHistory: (state, action) => {
      state.history.unshift(action.payload);
    },
  },
});

export const { setQuery, startQuery, setResults, setError, addToHistory } =
  querySlice.actions;

export default querySlice.reducer;
