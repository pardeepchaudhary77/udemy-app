import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase/Config"
import { createUserWithEmailAndPassword } from "firebase/auth"

const userSlice = createSlice({
    name: "user",
    initialState: {
        user:null
    },
    reducers:{
        async createUser(state, action) {
            //state.user = (action.payload.email);
            const res = await createUserWithEmailAndPassword(auth, action.payload.email,action.payload.password)
                        .then((result) => {
                            result.user.displayName = action.payload.name
                        }).catch(error => console.log(error))
            return { ...state, user: res }
        },
        signIn(state, action){

        },
        signOut(state, action){

        }
    }
})

export const { createUser, signIn, signOut } = userSlice.actions

export const userReducer = userSlice.reducer 