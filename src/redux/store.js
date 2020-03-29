import {createStore, combineReducers, applyMiddleware} from "redux"
import {composeWithDevtools} from "redux-devtools-extension"
import {thunk} from "redux-thunk"


export default createStore(
    combineReducers(),composeWithDevtools(applyMiddleware(thunk))
)