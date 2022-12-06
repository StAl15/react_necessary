import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { mainReducer } from "./mainReducer"




const rootReducer = combineReducers({
    main: mainReducer,
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)