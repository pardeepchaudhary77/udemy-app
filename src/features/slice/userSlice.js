import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "../actions/userAction"

const initialState = {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false,
  }

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
    },
    extraReducers:{
        [createUser.pending]: (state) => {
            state.loading = true
            state.error = null
            state.userInfo = null
        },
        [createUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true // registration successful
            state.userInfo = payload
        },
        [createUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
            state.userInfo = payload
        }
    }
})


//export const { createUser, signIn, signOut } = userSlice.actions

export const userReducer = userSlice.reducer 