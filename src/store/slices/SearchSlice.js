import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    search: (state, action) => {
      state = action.payload || '';
      return state;
    },
  },
});

export const { search } = searchSlice.actions;
export default searchSlice.reducer;
