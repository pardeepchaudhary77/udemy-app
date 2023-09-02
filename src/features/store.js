import {applyMiddleware, configureStore}  from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./slice"
import thunk from "redux-thunk"

const middleware = [thunk]
const initialState = {}


export const store = configureStore(
    {reducer:reducers},
    {},
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


// eslint-disable-next-line import/no-anonymous-default-export
export default {store}