import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios/instance";

export const loginThunk = createAsyncThunk(
  'loginThink',
  async (data, { rejectWithValue }) => {
    try {
      return (await instance.get('/user?limit=10')).data.data[5]
    } catch (e) {
      rejectWithValue(e);
      return { name: 'Not found' }
    }
  }
)
