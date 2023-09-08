import { auth } from "../../firebase/Config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";
export const NO_USER = "NO_USER";

export const createUser = (data) => async(dispatch) => {
    dispatch({type: LOGIN_REQUEST})
    try{    
        await createUserWithEmailAndPassword(auth, data.email, data.password)
                .then(async(result) => {
                    await updateProfile(auth.currentUser, {displayName: data.name}).then(() => {
                        return (
                            dispatch({
                                type: LOGIN_SUCCESS
                            })
                        )
                    })
                    
                })
        
    }catch(error){
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.message
        })
    }
}

export const loginUser = (data) => async(dispatch) =>{
    dispatch({type: LOGIN_REQUEST})
    try{
        await signInWithEmailAndPassword(auth, data.email, data.password)
                .then(result => {
                    dispatch({type: LOGIN_SUCCESS})
                })
    }catch(error){
        dispatch({type: LOGIN_FAILURE, payload: error.message})
    }
} 

export const verifyAuth = () => dispatch => {
    dispatch({type: VERIFY_REQUEST})
    auth.onAuthStateChanged(user => {
      if (user !== null) {
        dispatch({type: VERIFY_SUCCESS, payload: user});
      }else{
        dispatch({type: NO_USER});
      }        
    });
  };

export const signOutUser = () => async(dispatch) => {
    dispatch({type: LOGOUT_REQUEST})

    const result = await auth.signOut()
    dispatch({
        type:LOGOUT_SUCCESS,
        payload: result
    })
}