import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64b04c87c60b8f941af58b39.mockapi.io/users';

export const fetchUser = createAsyncThunk('users', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/users');
    console.log(response.data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
