import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { cashReducer } from "./cashReducer"
import { customerReducer } from "./customerReducer"
import createSagaMiddleware from "@redux-saga/core"
import { countWatcher } from "../saga/countSaga"

const sagaMidleware = createSagaMiddleware()

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk, sagaMidleware))

sagaMidleware.run(countWatcher)