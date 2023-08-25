import {applyMiddleware, configureStore}  from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers"
import thunk from "redux-thunk"
import app from "../firebase/Config";
import { createFirestoreInstance } from 'redux-firestore'

const middleware = [thunk]
const initialState = {}

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

export const store = configureStore(
    {reducer:reducers},
    {},
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export const rrfProps = {
    firebase: app,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {store, rrfProps}