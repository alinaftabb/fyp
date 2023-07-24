import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'currUser',
  initialState: {},
  reducers: {
    addUser: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
