import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: [],
  reducers: {
    post: (state, action) => {
      const newState = [...state];

      action.payload.forEach(payloadPost => {
        const alreadyExists = state.find(
          statePost => statePost.id === payloadPost.id
        );

        if (!alreadyExists) {
          newState.push(payloadPost);
        }
      });

      return newState;
    },
  },
});

export const { post } = postSlice.actions;
export default postSlice.reducer;
