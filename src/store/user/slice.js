import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { loginThunk } from "./thunk";

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: b => {
    b.addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload
    })
  }
})

export default userSlice
