import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/slice";

export const rootReducer = combineReducers({
    user: userSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})