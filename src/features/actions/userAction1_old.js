import { auth } from "../../firebase/Config"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
    "user/create",
    async(data, { rejectWithValue }) => {
        try{
        await createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((result) => {
                    result.user.displayName = data.name
                }).then(() => 
                    auth.onAuthStateChanged(user => {
                        if(user){
                            return user
                        }else{
                            return null
                        }
                    })
                )
        }catch(error){
            return rejectWithValue(error)
        }
    }
)
export const signInUser = createAsyncThunk(
    "user/create",
    async(data, { rejectWithValue }) => {
        try{
           // auth.
        }catch(error){
            return rejectWithValue(error)
        }
    }
)

export const signOutUser = createAsyncThunk(
    "user/signout",
    () => {
        auth.signOut()
    }
)