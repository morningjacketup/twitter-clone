import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            console.log(action.payload)
            state.user = { ...action.payload }
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice