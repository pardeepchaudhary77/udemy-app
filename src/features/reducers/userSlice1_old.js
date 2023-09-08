import { createSlice } from "@reduxjs/toolkit";
import { createUser, signOutUser, signInUser, getUser } from "../actions/userAction"

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
        // Create User.....
        [createUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [createUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true // registration successful
            state.userInfo = payload
        },
        [createUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        // Create User.....
        [signInUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [signInUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true // registration successful
        },
        [signInUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        // Signout User.....
        [signOutUser.pending]:(state) => {
            state.loading = true
        },
        [signOutUser.fulfilled]:(state) => {
            state.loading = false
        },
        //getUsers
        [signInUser.pending]: (state) => {
            state.loading = true
            state.error = null
        }
    }
})


//export const { createUser, signIn, signOut } = userSlice.actions

export const userReducer = userSlice.reducer 