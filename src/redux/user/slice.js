import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from './userOperations';

const initialState = {
  users: [],
  follow: true,
  whitelist: ['users'],
};

export const userSlice = createSlice({
  initialState,
  name: 'users',
  reducers: {
    updateFollowers: (state, action) => {
      const { userId, increment } = action.payload;
      const user = state.users.find(u => u.id === userId);
      if (user) {
        user.followers += increment;
        if (increment === -1) {
          user.follow = false;
        }
        if (increment === 1) {
          user.follow = true;
        }
      }
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});
export const { updateFollowers } = userSlice.actions;
