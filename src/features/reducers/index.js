import { combineReducers } from "redux"
import { userReducer } from "./userSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userReducer']
}

const reducers = combineReducers({
    user: userReducer
})

export default persistReducer(persistConfig, reducers)