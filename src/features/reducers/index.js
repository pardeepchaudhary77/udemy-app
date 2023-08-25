import { combineReducers } from "redux"
import { userReducer } from "./userReducer";
import { firebaseReducer } from 'react-redux-firebase'

const reducers = combineReducers({
    user: userReducer,
    firebase: firebaseReducer
})

export default reducers;