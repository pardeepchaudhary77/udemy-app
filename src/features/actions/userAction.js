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
                }).then(data => {
                    const token = data.user?.getIdToken();
                    console.log(token)
                })
        }catch(error){
            return rejectWithValue(error)
        }
    }
)

// export const createUser = (name, email, password) => async(dispatch) => {
//     const res = await createUserWithEmailAndPassword(auth, email,password)
//                 .then((result) => {
//                     result.user.displayName = name
//                 })
//     try{
        
//         // const res = await app.auth().createUserWithEmailAndPassword(email, password)
//         //         .then((result) => {
//         //             result.user.updateProfile({
//         //                 displayName: name
//         //             })
//         //         }).then((result)=>{
//         //             app.firestore().collection("users").doc(app.auth().currentUser.uid).set({
//         //                 displayName: name,
//         //                 role: 0,
//         //             })
//         //         })
//         dispatch({
//             type: "CREATE_USER",
//             payload: res
//         }) 
//     }catch(error){
//         dispatch({
//             type: "ERROR_MESSAGE",
//             payload: error.message
//         })
//     }
// }