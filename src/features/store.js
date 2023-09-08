import {applyMiddleware, configureStore}  from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers"
import thunk from "redux-thunk"
import persistStore from "redux-persist/es/persistStore";
import { verifyAuth } from "./actions/userAction";

const middleware = [thunk]
const initialState = {}

export const store = configureStore(
    {reducer:reducers},
    {},
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

store.dispatch(verifyAuth())

export const persistor = persistStore(store)
// eslint-disable-next-line import/no-anonymous-default-export
export default {store, persistor}